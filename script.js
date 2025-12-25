// Music
const music = document.getElementById("music");
document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

// Page logic
function openBook() {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
}

function nextPage(a, b) {
  document.getElementById(a).classList.add("hidden");
  document.getElementById(b).classList.remove("hidden");
}

// Snow generation
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
