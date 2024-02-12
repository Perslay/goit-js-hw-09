'use strict';

import Notiflix from 'notiflix';

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
  let createdPromises = 0;

  const timerId = setInterval(() => {
    if (createdPromises >= amount.value) {
      clearInterval(timerId);
      return;
    }
    createPromise(createdPromises + 1, delay.value)
      .then(resolved => Notiflix.Notify.success(resolved))
      .catch(rejected => Notiflix.Notify.failure(rejected));
    createdPromises++;
  }, step.value);
});
