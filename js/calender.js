var days=["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"] ;
var months =["January","February","March","April","May","June","July","August", "September", "October","November", "December"];

function date()
{
    var today = new Date();
    var dl = today.getDay();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    document.getElementById("dayInLetters").textContent=days[dl];
    document.getElementById("day").textContent=d;
    document.getElementById("month").textContent=months[m];
    document.getElementById("year").textContent=y;
}

window.onload = function()
{
    date();
}
