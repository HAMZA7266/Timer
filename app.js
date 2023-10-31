var display = document.getElementById("display")
var timer = " "
var [second, minutes, hours] = [0, 0, 0]
var btn = document.getElementById("start")

function stopwatch() {
    second++
    if (second == 60) {
        second = 0
        minutes++
        if (minutes == 60) {
            minutes = 0
            hours++
        }
    }
    
    var h= hours < 10 ? "0"+hours:hours
    var m= minutes < 10 ? "0"+minutes:minutes
    var s= second < 10 ? "0"+second:second
    display.innerHTML = h + ":" + m + ":" + s

}
function watchstart() {
    if (timer !== " ") {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function stop(){
    timer=clearInterval(timer)
}

function reset(){
    clearInterval(timer)

display.innerHTML="00:00:00"
}


