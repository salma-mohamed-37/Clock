function time()
{
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    if(hours <10) {hours = "0"+hours;}
    if(minutes <10) {minutes = "0"+minutes;}
    if(seconds <10) {seconds = "0"+seconds;}

    document.getElementById("hours").textContent=hours;
    document.getElementById("minutes").textContent=minutes;
    document.getElementById("seconds").textContent=seconds;
    
}

window.onload = function()
{
    'use strict';
    setInterval(time, 500);
};