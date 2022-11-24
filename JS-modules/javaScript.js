setInterval(() =>{
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();

let currentDate = `${hour}:${min} | ${day}-${month}-${year}`;
const dateH = document.getElementById('time');
dateH.innerHTML = `Current date ${currentDate}`;
console.log(currentDate);}, 1000)