const pages = document.querySelectorAll('.page');
const music = document.getElementById('music');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const start = document.getElementById('start');
const restart = document.getElementById('restart');

let index = 0;

// ===== PAGE ANIMATION ENGINE =====
function animatePage(oldPage, newPage, direction) {
  oldPage.classList.remove('active');
  oldPage.classList.add(direction === 'next' ? 'flip-out-left' : 'flip-out-right');

  newPage.classList.remove('hidden');
  newPage.classList.add('active', direction === 'next' ? 'flip-in-right' : 'flip-in-left');

  setTimeout(() => {
    oldPage.classList.remove('flip-out-left', 'flip-out-right');
    newPage.classList.remove('flip-in-right', 'flip-in-left');
    oldPage.classList.add('hidden');
  }, 600);
}

// ===== PAGE CONTROL =====
function showPage(newIndex, direction) {
  if (newIndex < 0 || newIndex >= pages.length) return;

  const oldPage = pages[index];
  const newPage = pages[newIndex];

  if (oldPage !== newPage) {
    animatePage(oldPage, newPage, direction);
    index = newIndex;
  }

  // Button logic
  start.style.display = index === 0 ? 'inline-block' : 'none';
  prev.style.display = index > 0 ? 'inline-block' : 'none';
  next.style.display = index > 0 && index < 5 ? 'inline-block' : 'none';
  restart.style.display = index === 5 ? 'inline-block' : 'none';
}

// ===== EVENTS =====
document.body.addEventListener('click', () => {
  if (music.paused) music.play();
}, { once: true });

start.onclick = () => showPage(1, 'next');
next.onclick = () => showPage(index + 1, 'next');
prev.onclick = () => showPage(index - 1, 'prev');
restart.onclick = () => showPage(0, 'prev');

// ===== INITIAL STATE =====
pages.forEach((p, i) => {
  if (i !== 0) p.classList.add('hidden');
});

// ===== SNOW =====
const snow = document.querySelector('.snow');
for (let i = 0; i < 60; i++) {
  const flake = document.createElement('span');
  const size = Math.random() * 5 + 3;
  flake.style.width = size + 'px';
  flake.style.height = size + 'px';
  flake.style.left = Math.random() * 100 + 'vw';
  flake.style.animationDuration = Math.random() * 8 + 5 + 's';
  flake.style.opacity = Math.random();
  snow.appendChild(flake);
}
