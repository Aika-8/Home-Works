// Task 1
const h1 = document.querySelector("h1");
function changeWord(h1) {
  return h1;
}
setTimeout(() => changeWord((h1.textContent = "Ураа!")), 10000);
// Task 2
const colorDiv = document.getElementById("color_div");
let set_Interval;
function generate() {
  colorDiv.setAttribute(
    "style",
    `background-color: #${Math.floor(Math.random() * 0xffffff).toString(16)}`
  );
}
set_Interval = setInterval(generate, 1000);
setTimeout(() => {
  clearInterval(set_Interval);
}, 100000);
// task 3
let timer;
let isRunning = false;
let totalSeconds = 0;
function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startPauseButton").innerText = "Start";
  } else {
    if (totalSeconds === 0) {
      let minutes = parseInt(document.getElementById("minutes").value) || 0;
      let seconds = parseInt(document.getElementById("seconds").value) || 0;
      totalSeconds = minutes * 60 + seconds;
      if (totalSeconds <= 0) {
        return;
      }
    }
    document.getElementById("startPauseButton").innerText = "Pause";
    timer = setInterval(() => {
      let min = Math.floor(totalSeconds / 60);
      let sec = totalSeconds % 60;
      document.getElementById("display").innerText = `${String(min).padStart(
        2,
        "0"
      )}:${String(sec).padStart(2, "0")}`;

      if (totalSeconds === 0) {
        clearInterval(timer);
        document.getElementById("startPauseButton").innerText = "Старт";
        isRunning = false;
      } else {
        totalSeconds--;
      }
    }, 1000);
  }
  isRunning = !isRunning;
}
function restartTimer() {
  clearInterval(timer);
  document.getElementById("display").innerText = "00:00";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
  document.getElementById("startPauseButton").innerText = "Старт";
}
