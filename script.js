const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  if (music.paused) {
    music.currentTime = 10;
    music.play();
  }
}, { once: true });

function openBook() {
  transition("cover", "page1");
}

function nextPage(a, b) {
  transition(a, b);
}

function transition(current, next) {
  const c = document.getElementById(current);
  const n = document.getElementById(next);

  c.classList.add("turn");

  setTimeout(() => {
    c.classList.add("hidden");
    c.classList.remove("turn");
    n.classList.remove("hidden");
  }, 700);
}

const snow = document.querySelector(".snow");

for (let i = 0; i < 70; i++) {
  const flake = document.createElement("span");
  const size = Math.random() * 6 + 3;

  flake.style.width = size + "px";
  flake.style.height = size + "px";
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.opacity = Math.random();
  flake.style.animationDuration = (Math.random() * 6 + 6) + "s";
  flake.style.animationDelay = Math.random() * 5 + "s";

  snow.appendChild(flake);
}
