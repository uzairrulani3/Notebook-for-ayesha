const pages = document.querySelectorAll('.page');
const music = document.getElementById('music');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const start = document.getElementById('start');
const restart = document.getElementById('restart');

let index = 0;

function showPage() {
  pages.forEach(p => p.classList.remove('active'));
  pages[index].classList.add('active');

  start.style.display = index === 0 ? 'inline-block' : 'none';
  prev.style.display = index > 0 ? 'inline-block' : 'none';
  next.style.display = index > 0 && index < 5 ? 'inline-block' : 'none';
  restart.style.display = index === 5 ? 'inline-block' : 'none';
}

document.body.addEventListener('click', () => {
  if (music.paused) music.play();
}, { once: true });

start.onclick = () => { index = 1; showPage(); };
prev.onclick = () => { index--; showPage(); };
next.onclick = () => { index++; showPage(); };
restart.onclick = () => { index = 0; showPage(); };

showPage();

/* Snow generator */

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
