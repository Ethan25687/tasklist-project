setInterval(() =>{
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let session = "AM";

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hh - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min <10) ? "0" + min : min;

let currentDate = `Current Time ${hour}:${min} ${session} <br>Todays Date ${day}-${month}-${year}`;
const dateH = document.getElementById('time');
dateH.innerHTML = `${currentDate}`;
}, 1000)