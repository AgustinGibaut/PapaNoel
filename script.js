const MIN_LOADER_TIME = 2000;
const loaderStartTime = Date.now();

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const elapsed = Date.now() - loaderStartTime;
  const remainingTime = Math.max(MIN_LOADER_TIME - elapsed, 0);

  setTimeout(() => {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, remainingTime);
});

function getNextChristmasDate() {
  const now = new Date();
  let year = now.getFullYear();
  let christmasDate = new Date(`${year}-12-25T00:00:00`);
  if (now >= christmasDate) {
    christmasDate = new Date(`${year + 1}-12-25T00:00:00`);
  }
  return christmasDate;
}

function updateCountdown() {
  const targetDate = getNextChristmasDate();
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
