function hide(a) {
    document.getElementById(a).style.display = "none"
}

function show(a) {
    document.getElementById(a).style.display = "block"
}

function start() {
    hide("hblock"), show("tblock" + document.getElementById("textn").value.toString()), timer = (new Date).getTime()
}

function stop() {
    hide("tblock" + document.getElementById("textn").value.toString()), show("qblock" + document.getElementById("textn").value.toString()), readtime = ((new Date).getTime() - timer) / 1e3, timer = 0
}

function check() {
    var a = "t" + document.getElementById("textn").value.toString() + "w",
        b = document.getElementById("textn").value - 1;
    rq = 0, document.getElementsByName(a + "1")[an[b][0]].checked && rq++, document.getElementsByName(a + "2")[an[b][1]].checked && rq++, document.getElementsByName(a + "3")[an[b][2]].checked && rq++, document.getElementsByName(a + "4")[an[b][3]].checked && rq++, document.getElementsByName(a + "5")[an[b][4]].checked && rq++, document.getElementsByName(a + "6")[an[b][5]].checked && rq++, document.getElementsByName(a + "7")[an[b][6]].checked && rq++, document.getElementsByName(a + "8")[an[b][7]].checked && rq++, document.getElementsByName(a + "9")[an[b][8]].checked && rq++, document.getElementsByName(a + "10")[an[b][9]].checked && rq++, rq = rq / 10 * 100
}

function answer() {
    check(), hide("qblock" + document.getElementById("textn").value.toString()), show("rblock");
    var a = document.getElementById("text" + document.getElementById("textn").value.toString()).innerHTML;
    a = a.toString(), wordsnum = a.split(" ").length, znnum = a.length, document.getElementById("wordsnumh").innerHTML = wordsnum.toString(), document.getElementById("readtimehm").innerHTML = Math.floor(readtime / 60).toString(), document.getElementById("readtimehs").innerHTML = Math.floor(readtime % 60).toString(), document.getElementById("wordsspeedh").innerHTML = Math.round(wordsnum * rq / 100 / (readtime / 60)).toString(), document.getElementById("znspeedh").innerHTML = Math.round(wordsnum / (readtime / 60)).toString(), document.getElementById("rqh").innerHTML = rq.toString()
}

function again() {
    hide("rblock"), show("hblock")
}

var timer = 0, readtime = 0, wordsnum = 100, znnum = 500, rq = 0,
    an = [[2, 1, 2, 2, 1, 1, 1, 1, 3, 0], [3, 1, 1, 1, 1, 0, 0, 0, 2, 0], [0, 0, 3, 2, 1, 0, 2, 1, 2, 2], [1, 2, 1, 2, 0, 1, 1, 1, 1, 2], [1, 0, 1, 0, 2, 3, 2, 1, 0, 1], [1, 0, 0, 1, 1, 1, 1, 1, 2, 2], [0, 2, 1, 3, 0, 1, 2, 1, 1, 1], [3, 2, 2, 1, 0, 1, 3, 1, 1, 2], [1, 1, 2, 2, 2, 2, 0, 1, 2, 2], [1, 3, 1, 0, 4, 0, 3, 2, 0, 1], [2, 1, 1, 2, 1, 1, 1, 1, 3, 0], [2, 1, 0, 2, 2, 2, 1, 0, 1, 1], [2, 2, 0, 2, 0, 1, 1, 1, 1, 2], [4, 3, 2, 1, 1, 1, 0, 1, 2, 0], [1, 0, 0, 0, 0, 2, 0, 1, 1, 0], [1, 0, 2, 0, 0, 0, 0, 1, 2, 0], [3, 0, 0, 0, 1, 3, 1, 1, 2, 1], [0, 2, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 0, 1, 1], [0, 1, 2, 1, 3, 0, 0, 2, 3, 1]],
    interval = setInterval(function () {
        if (0 != timer) {
            var a = document.getElementById("textn").value;
            document.getElementById("timerh" + a.toString()).innerHTML = ((new Date).getTime() - timer) / 1e3
        }
    }, 100);