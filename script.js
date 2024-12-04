var minute = document.querySelector(".min");
var hour = document.querySelector(".hr");
var second = document.querySelector(".sec");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
var display = document.querySelector(".display");
var inputBox = document.querySelector(".input-box");
var bgm = document.querySelector(".bgm");
var hr, min, sec;
var interval;
var thr, tmin, tsec;

function getValue() {
    min = minute.value;
    min = (min == "") ? 0 : min-1;
    tmin = min;
    hr = hour.value;
    hr = (hr == "") ? 0 : hr;
    thr = hr;
    sec = second.value;
    sec = (sec == "") ? 59 : sec;
    tsec = sec;
    if(min >= 60 || sec >= 60) {
        alert("ENTER VALID TIME!");
    }
}
function runTimer() {
    sec-=1;
    console.log(sec);
    if(min > 0 && sec == 0) {
        sec = 60;
        min-=1;
    }
    if(hr > 0 && min == 0) {
        min = 59;
        hr-=1;
    }
    if(min == 0 && sec == 0) {
        clearInterval(interval);
    }
    
    display.innerHTML = (hr < 10 ? "0"+hr : hr ) + ":" + (min < 10 ? "0"+min : min) + ":" + (sec < 10 ? "0"+sec : sec);
    if(hr == 0 && min == 0 && sec == 0 ) {
        bgm.play();
        hr = thr;
        min = tmin;
        sec = tsec;
    }
}
function stopTimer() {
    clearInterval(interval);
}
function count() {
    if(min == undefined) {
        alert("ENTER VALUE!");
    } else {
        interval = setInterval(runTimer, 1000);
    }
}
function resetTimer() {
    clearInterval(interval);
    display.innerHTML = "00:00:00";
}
inputBox.addEventListener("keyup", getValue);
start.addEventListener("click", count);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);