setInterval(() =>{
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();

let currentDate = `Current Time ${hour}:${min} <br>Todays Date ${day}-${month}-${year}`;
const dateH = document.getElementById('time');
dateH.innerHTML = `${currentDate}`;
}, 1000)