
// script.js
let timerInterval;
let elapsedSeconds = 0;

const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedSeconds);
}

function startTimer() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  timerInterval = setInterval(() => {
    elapsedSeconds++;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedSeconds = 0;
  updateDisplay();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// イベントリスナー設定
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// 初期状態
updateDisplay();
stopBtn.disabled = true;
resetBtn.disabled = true;
