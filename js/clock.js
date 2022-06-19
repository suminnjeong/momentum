const time = document.querySelector("#clock");

function getDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}`;

    time.innerText = `${hoursStr} : ${minutesStr}`
}

getDate();
setInterval(getDate, 1000);