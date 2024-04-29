let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
}

function updateStopwatch() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.clock').innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(ms) {
    return ms < 10 ? `00${ms}` : (ms < 100 ? `0${ms}` : ms);
}
