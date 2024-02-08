'use strict';

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;

  timerId = setInterval(() => {
    color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);

  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function onStop() {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
