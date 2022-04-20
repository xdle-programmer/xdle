$(function () {
  function sound(src) {
    console.log(src)
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
let newSound = new sound('https://sound-pack.net/download/Sound_11084.wav')
  var socket = io.connect();
  $.notify.defaults({ globalPosition: 'top center', autoHideDelay:8000,showAnimation:'slideDown',showDuration: 400,hideAnimation: 'slideUp' })
  var app = new Vue({
    el: '#app',
    data: {
      str:{
        btn:'Trade'
      },
      online: 0,
      analytics: [],
      priceList: {},
      rates: {
        user: {},
        bot: {}
      },
      tmItems: [],
      siteBalance: 0,
      disableReload: true,
      disableTrade: true,
      botInventory: {},
      botInventorySelected: {},
      botInventorySelectedValue: 0,
      // user
      userInventory: [],
      userInventorySelected: [],
      userInventorySelectedValue: 0,
      // auth
      user: false,
      // trade
      offerStatus: {},
      invalidTradelink: false
    },
    methods: {
      CheckBtn(){
        if(this.userInventorySelected == 0 && Object.keys(this.botInventorySelected).length ==0)
        Vue.set(this.str,'btn','Deposit')
      },
      showGame(id) {
        if (id == 1) {
          for (let item of this.botInventory) {
            if (item.type == "Key") {
              item.hidden = 0
            } else {
              item.hidden = 1
            }
          }
        } else {
          for (let item of this.botInventory) {
            if (item.game == id && item.type != "Key") {
              item.hidden = 0
            } else {
              item.hidden = 1
            }
          }
        }
      },
      setInventorySortAmount(bot, desc) {
        return this.botInventory.sort(function (a, b) {
          if (desc) {
            return b.totalOffers - a.totalOffers;
          } else {
            return a.totalOffers - b.totalOffers;
          }
        });
      },
      reloadInv() {
        this.userInventorySelected = []
        this.botInventorySelected = {}
        this.userInventorySelectedValue = 0
        this.botInventorySelectedValue = 0
        socket.emit('get history')
      },
      updateTradelink() {
        var link = this.user.tradelink;
        if (typeof link !== 'undefined') {
          link = link.trim();
          if (
            link.indexOf('steamcommunity.com/tradeoffer/new/') === -1 ||
            link.indexOf('?partner=') === -1 ||
            link.indexOf('&token=') === -1
          ) {
            this.invalidTradelink = true;
          } else {
            this.invalidTradelink = false;
            socket.emit('tradelink',{
              token:link,
              steamid:this.user.steamid
            }, (err) => {
              if(err) return err;
              $.notify('Trade token saved')
            })
            localStorage.setItem(this.user.id, this.user.tradelink);
            $('#tradelink').modal('hide');
          }
        } else {
          this.invalidTradelink = true;
        }

      },
      setInventorySort(who, value) {
        if (who == 'bot') {
          this.botInventory = this.sortInventory(this.botInventory, value,true);
        } else {
          this.userInventory = this.sortInventory(this.userInventory, value,false);
        }
      },
      showModal() {
        $('#tradeoffer-tm').modal('show');
      },
      searchInventory(who, value) {
        var inventory = [];
        var search = [];
        if (who == 'bot') {
          search = this.botInventory;
        } else {
          search = this.userInventory;
        }
        for (var i in search) {
          var item = search[i];
          let name = (who=='bot')?item.market_hash_name:item.name
          if (name.toLowerCase().indexOf(value.toLowerCase()) === -1) {
            item.hidden = 1;
          } else {
            item.hidden = 0;
          }
          inventory.push(item);
        }
        if (who == 'bot') {
          this.botInventory = sortInventory(this.botInventory, true,true);
        } else {
          this.userInventory = sortInventory(this.userInventory, true,false);
        }
      },
      async loadHistory() {
        let History = new Array()
        $.notify('Loading history','success')
        axios.post('/history')
          .then(res=>{
            if(res.status == 200){
              for(let history of res.data){
                history.time = app.date(history.time)
                History.push(history)
            }
            History.sort((a,b)=>{
              return parseInt(b.ui_id) - parseInt(a.ui_id)
            })
            this.$set(this.user, 'history', History)
            $.notify('Loaded history','success')
            this.$forceUpdate();
            }
          }).catch(e=>console.error)
      },
      sortInventory(inventory, desc,user) {
        return inventory.sort(function (a, b) {
          if (desc) {
            if(user){
            return b.IPrice - a.IPrice;
            }else{
              return b.suggested_price_floor - a.suggested_price_floor;
            }
          } else {
            if(user){
              return a.IPrice - b.IPrice;
            }else{
              return a.suggested_price_floor - b.suggested_price_floor;
            }            
          }
        });
      },
      addItem(who, item) {
        if (who == 'bot') {
          this.botInventorySelectedValue += (item.IPrice)
          item.totalOffers -= 1
          item.c_withdraw += 1
          // let newOb = Object.assign(this.botInventorySelected[`${item.classid}_${item.instanceid}`],item)
          this.$set(this.botInventorySelected,`${item.classid}_${item.instanceid}`,{...item})
        } else {
          this.userInventorySelected.push(item)
          this.userInventorySelectedValue += parseFloat(item.suggested_price)
        }
        this.checkTradeable();
        this.CheckBtn()
      },
      removeItem(who, id) {
        if (who == 'bot') {
          this.botInventorySelectedValue -= id.IPrice
          delete this.botInventorySelected[`${id.classid}_${id.instanceid}`]
          id.c_withdraw -= 1
          id.totalOffers += 1
          this.tmItems.splice($.inArray(id.index, this.tmItems), 1)
        } else {
          this.userInventorySelected.splice($.inArray(id, this.userInventorySelected), 1);
          this.userInventorySelectedValue -= parseFloat(id.suggested_price);
          if (this.userInventorySelectedValue <= 0) {
            this.userInventorySelectedValue = 0;
          }
        }
        this.checkTradeable();
        this.CheckBtn()
      },
      checkTradeable() {
        var user = parseFloat(this.userInventorySelectedValue) + (typeof this.user.balance != 'undefined' ? parseFloat(this.user.balance) : 0);
        var bot = parseFloat(this.botInventorySelectedValue);
        if (user != 0 && user >= bot) {
          this.disableTrade = false;
        } else {
          this.disableTrade = true;
        }
      },
      date(str) {
        if (!str) { return '(n/a)'; }
        str = new Date(str * 1000);
        return str.getFullYear() + '-' + ((str.getMonth() < 9) ? '0' : '') + (str.getMonth() + 1) + '-' + ((str.getDate() < 10) ? '0' : '') + str.getDate()+'-'+str.getHours()+':'+str.getMinutes() ;
      },
      sendOffer() {
        if (!localStorage[this.user.id]) {
          $('#tradelink').modal('show');
        } else {
          this.offerStatus = {};
          this.checkTradeable();
          if (!this.disableTrade) {
            this.disableTrade = true;
            if (this.userInventorySelected.length > 0) {
              $('#tradeoffer').modal('show');
            } else {
              $('#tradeoffer-tm').modal('show');
            }
            $.notify('Sending your tradeoffer to server', 'info') 
            console.log(this.botInventorySelected)           
            socket.emit('get offer', {
              user: this.userInventorySelected,
              bot: this.botInventorySelected,
              steamID64: this.user.id,
              tradelink: localStorage[this.user.id],
            });
            this.userInventorySelected = []
            this.userInventory = []
            this.userInventorySelected = []
            this.reloadInv()
            this.$forceUpdate();
            socket.emit('get user inv')
          }
        }
      },
    }
  });

  const s = [
    { tm: "Looking for sellers", bar: 20 },
    { tm: "Found the seller", bar: 30 },
    { tm: "Contacting the seller", bar: 35 },
    { tm: "Waiting the response", bar: 45 },
    { tm: "Seller responded to offer", bar: 75 }
  ]

  socket.on('site inv', (s) => {
    let keys = Object.keys(s)
    for(let i of keys){
      app.botInventory[i] = s[i]
    }
  })
  socket.on('done', () => {
    $.notify('All trades proccessed!', 'success')
  })
  socket.on('site balance', (balance) => {
    $.notify("Site inventory loaded", "success");
    app.siteBalance = ((balance) * 0.015).toFixed(2)
  })
  socket.on('balance', ({ balance, tradelink }) => {
    app.user.balance = balance.toFixed(2)
    $.notify(`Your balance is ${balance.toFixed(2)}`, 'success')
    app.user.tradelink = tradelink
    app.$forceUpdate()
  })
  socket.on('user', function (user) {
    $.notify("Welcome", "success");
    if (typeof app.user.tradelink === 'undefined' && app.user) {
      $('#tradelink').modal('show');
    }
    user.steamID64 = user.steamid;
    app.user = user;
    app.user.history = new Array()
    socket.emit('get user inv');

    if (localStorage[app.user.steamid]) {
      app.user.tradelink = localStorage[app.user.steamid];
    }
  });
  socket.on('siteAnalytics', (d) => app.analytics = [...d])
  socket.on('user inv', (data) => {
    app.userInventory = [...data]
  })
  function startTimer(){
    for(let i of app.tmItems){
      if(i.time != 0){
        i.time-=1
      }
    }
    setTimeout(() => {
      startTimer()
    }, 1500)
  }
  socket.on('active',(active)=>{
    if(app.tmItems.length == 0){
      for(let i of active){
        if( i.status != 5 && i.status != 6){
          startStatus()
          startCheck()
          i.tm="Sending you the trade offer"
          i.bar = 10
          i.time = 400
          startTimer()
          if(i.ui_id !== 'undefined'){
            app.tmItems.push(i)
          }
        }
      }
    }
  })
  socket.on('trade', (data) => {
    app.offerStatus = data.response.offer
    $.notify("Your trade offer was created", "success");
  })
  socket.on('offerid', id => app.offerStatus.offer = id.toString())
  socket.on('notify', ({ text, style }) => {
    $.notify(text, style)
  })
  socket.on('status', (state) => {
    app.offerStatus.status = state
    if (app.offerStatus.status == 3) {
      $('#tradeoffer').modal('hide');
      app.userInventorySelected = new Array()
      app.userInventorySelectedValue = 0
      socket.emit('get user inv', app.user.steamID64);
    }
  })
  socket.on('online', d => app.online = d)
  socket.on('declined', () => {
    $.notify('Trade Declined', 'error')
    $('#tradeoffer').modal('hide');
  })
  socket.on('items-tm', i => {
    let check = true
    if(typeof i.status != 'undefined'){
      for(let item of app.tmItems){
        if(i.ui_id == item.ui_id)
        check=false
      }
      if(check){
      i.time = 300
      startTimer()
      if(i.ui_id !== 'undefined'){
        app.tmItems.push(i)
      }
      }
    }
    $('#tradeoffer-tm').modal('show')
    startCheck()
    startStatus()
  })
 async function startCheck(){
    for(let i in app.tmItems){
      if((app.tmItems[i].status != 5) && (app.tmItems[i].status != 6)){
        axios.post(`/trade/${app.tmItems[i].ui_id}`)
        .then(res=>{
          if(res.status == 200){
            app.tmItems[i].status = res.data.status            
            if(res.data.status == 4){
              newSound.play()
              let newOb = Object.assign(app.tmItems[i],{time:0,bar:100,tm:"Trade sent check your steam trades",bid:res.data.bid})
              Vue.$set(app.tmItems,i,newOb)
            }else if(app.tmItems[i].status == 5){
              let newOb = Object.assign(app.tmItems[i],{time:0,bar:100,tm:"Trade accepted"})
              $(`#${item.ui_id}`).addClass('progress-bar-success')
              Vue.$set(app.tmItems,i,newOb)
            }else if(res.data.status == 6){
              let newOb = Object.assign(app.tmItems[i],{time:0,bar:100,tm:"Trade was declined"})
              Vue.$set(app.tmItems,i,newOb)
              $(`#${item.ui_id}`).addClass('progress-bar-info')
            }
          }
        }).catch(e=>console.error)
      }
      await delay(5000)
    }
    if(app.tmItems.length > 0 )
    startCheck()
  }
  async function startStatus() {
    for (let item of app.tmItems) {
      for (let status in s) {
        if (item.bar != 100) {
          await (new Promise(res => {
            setTimeout(() => {
              if(item.bar != 100){
                item.tm = s[status].tm
                item.bar = s[status].bar
              }
              res()
            }, Math.floor(Math.random() * 15000))
          }))
        }
      }
    }
  }
  function sortInventory(inventory, desc) {
    return inventory.sort(function (a, b) {
      return (desc) ? b.IPrice - a.IPrice : a.IPrice - b.IPrice;
    });
  }
 async function delay(n = 0) {
    return new Promise(resolve => setTimeout(resolve, n))
  }
});
