$(()=>{
  const socket = io.connect()
  const ad = new Vue({
    el:'#adminVue',
    data:{
      users:[],
      adminData:{
        totalUsers:0,
        allUsers:0,
        totalWithdraws:0,
        totalProfit:0
      }
    }
  })
  var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "Profit $",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 2,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
socket.emit('get stats',(data)=>{
  ad.adminData = {...data}
  console.log(ad.adminData)
})
socket.emit('usersA',(users)=>{
  ad.users = users.sort((a,b)=>{
    return b.balance - a.balance
  })
})
socket.emit('historyAdmin',(historyD)=>{
  let labels = []
  let data = []
  for(let i in historyD){
    labels.push(returnDate(i))
    console.log(returnDate(i),historyD[i].toFixed(3))
    data.push(historyD[i].toFixed(3))
  }
  myLineChart.data.labels = [...labels]
  myLineChart.data.datasets[0].data = [...data]
  myLineChart.options.scales.yAxes[0].ticks.max =Math.round((Math.max(...data)*1.3))
  myLineChart.update()
})
function returnDate(data){
 let d = new Date((data*1000)-100)
 const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
 console.log(d)
 return `${months[d.getMonth()]} ${d.getDate()}`
}
})