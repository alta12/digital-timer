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
    sec = second.value;
    min = minute.value;
    hr = hour.value;
    hr = (hr == "") ? 0 : hr;
    min = (min == "") ? 0 : min;
    min = (sec == "" && min > 0) ? min-1 : min;
    sec = (sec == "") ? 0 : sec;
    sec = (min > 0 && sec == 0)  ? 60 : sec;
    tsec = sec;
    tmin = min;
    thr = hr;
    
    if(min >= 60 || sec >= 61) {
        alert("ENTER VALID TIME!");
    }
}
function runTimer() {
    sec-=1;
    console.log(sec);
    if(min > 0 && sec == 0) {
        sec = 59;
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
    console.log(hr+":"+min+":"+sec);
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