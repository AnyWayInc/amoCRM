const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const start = new Date();
    const timer = setInterval(
      (start) => {
        const diff = new Date(new Date() - start);
        const timeRU = diff.toLocaleTimeString('ru', {timeZone: 'UTC'});
        timerEl.innerHTML = timeRU;
        if (diff.getSeconds() === seconds){
          clearInterval(timer);
        } 
      },
      1, start
    );
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
