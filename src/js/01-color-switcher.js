'use strict';

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorSwitcher;

function onStart() {
  colorSwitcher = setInterval(switchColor, 1000);

  function switchColor() {
    return (body.style.backgroundColor = getRandomHexColor());
  }

  switchColor();
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function onStop() {
  clearInterval(colorSwitcher);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
