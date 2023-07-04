
const btn = document.querySelector('.btn1');

const timer = document.querySelector('.timer');

const display = document.querySelector('.display');

let count = 0;
let time_counter = 5;
let interval;

btn.addEventListener('click', () => {
  time_counter = 5;
  count++;
  display.innerHTML = count;
  timer.innerHTML = time_counter;
  clearInterval(interval);
  samuel();
})


function samuel() {
  interval = setInterval(() => {
    time_counter--;
    timer.innerHTML = time_counter;
    if (time_counter === 0) {
      clearInterval(interval);
      count = 0;
      display.innerHTML = count;
    }
  }, 1000);
}

