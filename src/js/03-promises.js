'use strict';

const form = document.querySelector('.form');
const delay = document.querySelector("[name='delay']");
const step = document.querySelector("[name='step']");
const amount = document.querySelector("[name='amount']");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const totalAmount = parseInt(amount.value);
  let createdPromises = 0;

  const timerId = setInterval(() => {
    if (createdPromises >= totalAmount) {
      clearInterval(timerId);
      return;
    }
    createPromise(createdPromises + 1, delay.value)
      .then(resolved => console.log(resolved))
      .catch(rejected => console.log(rejected));
    createdPromises++;
  }, step.value);
});
