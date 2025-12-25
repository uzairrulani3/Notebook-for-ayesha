// 🎵 Music control — starts from 10 seconds after first interaction
const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  if (music.paused) {
    music.currentTime = 10;
    music.play();
  }
}, { once: true });


// 📖 Notebook controls
function openBook() {
  const cover = document.getElementById("cover");
  const firstPage = document.getElementById("page1");

  cover.classList.add("turn");
  setTimeout(() => {
    cover.classList.add("hidden");
    cover.classList.remove("turn");
    firstPage.classList.remove("hidden");
  }, 700);
}

function nextPage(current, next) {
  const currentPage = document.getElementById(current);
  const nextPage = document.getElementById(next);

  currentPage.classList.add("turn");

  setTimeout(() => {
    currentPage.classList.add("hidden");
    currentPage.classList.remove("turn");
    nextPage.classList.remove("hidden");
  }, 700);
}


// ❄️ Snow generation
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
