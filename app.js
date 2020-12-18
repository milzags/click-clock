const hours = document.querySelector('[data-hour-hand]');
const minutes = document.querySelector('[data-minute-hand]');
const seconds = document.querySelector('[data-second-hand]');
const hourDisplay = document.querySelector('.hour-display');

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/ 60; 
    const hoursRatio = (minutesRatio + currentDate.getHours())/ 12;
    setRotation(seconds, secondsRatio);
    setRotation(minutes, minutesRatio);
    setRotation(hours, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

