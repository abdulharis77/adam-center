var millisec = 100
var sec = 60
var min = 60
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')

function timer() {
    millisec--
    displaymili.innerHTML = millisec
    if (millisec == 1) {
        sec--
        displaysec.innerHTML = sec
        millisec = 100
        if (sec == 1) {
            min--
            sec = 60
            displaymin.innerHTML = min
        }
    }

}

var interval;

function start() {
    interval = setInterval(timer, 10);

}
function pause() {
    clearInterval(interval)
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}



function foo() {
    console.log(1)
}

setTimeout(foo, 1000)
setInterval(foo, 1000)