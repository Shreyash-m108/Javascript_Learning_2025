const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let intervalId;

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

startBtn.addEventListener("click", () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    document.querySelector("body").style.backgroundColor = randomColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
