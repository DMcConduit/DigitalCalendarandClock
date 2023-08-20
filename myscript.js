let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(()=>{
    let currentTime = new Date();
    

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()% 12 || 12;
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    ampm.innerHTML = (currentTime.getHours() >= 12?'PM':'AM');
}, 1000)

let month = document.getElementById('month');
let day = document.getElementById('day');
let year = document.getElementById('year');

let currentDate = new Date();
month.innerHTML = currentDate.getMonth()+1;
day.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();

