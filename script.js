const music = document.getElementById("music");
document.body.addEventListener("click", () => music.play(), { once: true });

let current = 0;
const pages = document.querySelectorAll(".page");

function showPage(n) {
  pages.forEach(p => p.classList.add("hidden"));
  pages[n].classList.remove("hidden");
}

function nextPage() {
  if (current < pages.length - 1) current++;
  showPage(current);
}

function prevPage() {
  if (current > 0) current--;
  showPage(current);
}

function startOver() {
  current = 0;
  showPage(current);
}

showPage(0);

// Snow
const snow = document.querySelector(".snow");
for (let i = 0; i < 80; i++) {
  const flake = document.createElement("span");
  const size = Math.random() * 6 + 3;
  flake.style.width = size + "px";
  flake.style.height = size + "px";
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.opacity = Math.random();
  flake.style.animationDuration = (Math.random() * 6 + 6) + "s";
  snow.appendChild(flake);
}
