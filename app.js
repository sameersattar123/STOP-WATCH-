var min=0;
var sec=0;
var msec=0;
var interval;

var minheading = document.getElementById('min')
var secheading = document.getElementById('sec')
var msecheading = document.getElementById('msec')

function timer()
{
    msec++
    msecheading.innerHTML = msec;
    if(msec >=100)
    {
        sec++
        secheading.innerHTML = sec;
        msec=0;
    }
    else if(sec >=60)
    {
        min++
        minheading.innerHTML=min
        sec=0;
    }
}

function start(){
    interval = setInterval(timer,10)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    msecheading.innerHTML=msec;
    pause()
}

function disable(x){
    x.disabled =true;
} 






