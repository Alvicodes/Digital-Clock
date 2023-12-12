// Digital clock variables
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dayOfTheWeek = document.getElementById("dayOfTheWeek");
const numberDate = document.getElementById("numberDate");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Timer variables
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

let seconds = 0;
let minutes = 0;
let hours = 0;
let stopstatus = 0;
let timer = document.querySelector('timer')

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date();
    let fullDate = d.toLocaleDateString();
    let day = days[d.getDay()]; // Returns the weekday of a date as a number (0-6). Filtered through the days array
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    // if h is less than 10 then write "0" + h otherwise write h
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    dayOfTheWeek.innerText = day + " " + fullDate;

    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()

start.addEventListener('click', () => {
    if (stopstatus !== 0) {
        clearInterval(stopstatus);
    }
    stopstatus = setInterval(() => {
        seconds += 1;
        if (seconds === 60) {
            seconds == 0;
            minutes++;
            if (minutes === 60) {
                minutes == 0;
                hours++
            }
        }
        h = hours < 10 ? "0" + hours : hours;
        m = minutes < 10 ? "0" + minutes : minutes;
        s = seconds < 10 ? "0" + seconds : seconds;

        timer.innerHTML = `${h} : ${m} : ${s}`;
    }, 1000);
})





