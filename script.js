const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerText = "☀️ Light";
  } else {
    themeBtn.innerText = "🌙 Dark";
  }
});

function generatePassword() {
  const length = document.getElementById("passLength").value;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("passwordOutput").innerText = password;
}

function generateQR() {
  const text = document.getElementById("qrText").value;
  const qrBox = document.getElementById("qrBox");

  if (text.trim() === "") {
    qrBox.innerHTML = "Please enter text.";
    return;
  }

  qrBox.innerHTML = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}">
  `;
}

function formatJSON() {
  const input = document.getElementById("jsonInput").value;

  try {
    const json = JSON.parse(input);
    document.getElementById("jsonOutput").innerText = JSON.stringify(json, null, 2);
  } catch {
    document.getElementById("jsonOutput").innerText = "Invalid JSON";
  }
}

function upperCase() {
  const text = document.getElementById("caseInput").value;
  document.getElementById("caseOutput").innerText = text.toUpperCase();
}

function lowerCase() {
  const text = document.getElementById("caseInput").value;
  document.getElementById("caseOutput").innerText = text.toLowerCase();
}

function capitalizeText() {
  const text = document.getElementById("caseInput").value;
  const result = text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  document.getElementById("caseOutput").innerText = result;
}

function countWords() {
  const text = document.getElementById("wordInput").value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  const characters = text.length;

  document.getElementById("wordOutput").innerText =
    `Words: ${words} | Characters: ${characters}`;
}

function generateColor() {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("colorBox").style.background = color;
  document.getElementById("colorCode").innerText = color;
}

function generateGradient() {
  const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;

  document.getElementById("gradientBox").style.background = gradient;
  document.getElementById("gradientCode").innerText = gradient;
}

function encodeBase64() {
  const text = document.getElementById("baseInput").value;
  document.getElementById("baseOutput").innerText = btoa(text);
}

function decodeBase64() {
  const text = document.getElementById("baseInput").value;

  try {
    document.getElementById("baseOutput").innerText = atob(text);
  } catch {
    document.getElementById("baseOutput").innerText = "Invalid Base64 text";
  }
}

function convertKm() {
  const km = document.getElementById("kmInput").value;
  const miles = km * 0.621371;

  document.getElementById("kmOutput").innerText =
    `${km} km = ${miles.toFixed(2)} miles`;
}

function calculate() {
  const input = document.getElementById("calcInput").value;

  try {
    const result = Function('"use strict"; return (' + input + ')')();
    document.getElementById("calcOutput").innerText = result;
  } catch {
    document.getElementById("calcOutput").innerText = "Invalid calculation";
  }
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

let seconds = 0;
let timer = null;

function updateStopwatch() {
  seconds++;

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  document.getElementById("stopwatch").innerText = `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
  if (timer === null) {
    timer = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
}

function saveNote() {
  const note = document.getElementById("noteInput").value;
  localStorage.setItem("devNote", note);
  showNote();
}

function showNote() {
  const note = localStorage.getItem("devNote");

  if (note) {
    document.getElementById("savedNote").innerText = "Saved Note: " + note;
  }
}

function clearNote() {
  localStorage.removeItem("devNote");
  document.getElementById("savedNote").innerText = "";
  document.getElementById("noteInput").value = "";
}

showNote();
