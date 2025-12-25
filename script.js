const pages = [...document.querySelectorAll('.sheet')];
const controls = document.getElementById('controls');
const music = document.getElementById('music');

let current = 0;

function render() {
  pages.forEach(p => p.classList.remove('active'));
  pages[current].classList.add('active');

  controls.innerHTML = "";

  if (current === 0) {
    controls.innerHTML = `<button onclick="next()">Start ✨</button>`;
  }
  else if (current < pages.length - 1) {
    controls.innerHTML = `
      <button onclick="prev()">← Previous</button>
      <button onclick="next()">Next →</button>
    `;
  }
  else {
    controls.innerHTML = `
      <button onclick="prev()">← Previous</button>
      <button onclick="restart()">Start Over 🔄</button>
    `;
  }
}

function next() {
  if (current === 0 && music.paused) music.play();
  if (current < pages.length - 1) current++;
  render();
}

function prev() {
  if (current > 0) current--;
  render();
}

function restart() {
  current = 0;
  render();
}

render();
