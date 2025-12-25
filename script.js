const pages = document.querySelectorAll(".page");
const controls = document.getElementById("controls");
const music = document.getElementById("bgMusic");

let index = 0;

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function openBook() {
  if (music.paused) music.play();
  index = 1;
  showPage(index);
  controls.classList.remove("hidden");
}

function nextPage() {
  if (index < pages.length - 1) {
    index++;
    showPage(index);
  }
}

function prevPage() {
  if (index > 0) {
    index--;
    showPage(index);
  }
}

function restart() {
  index = 0;
  showPage(index);
  // music continues (no pause)
}

/* Snow */
const snow = document.querySelector(".snow");
for (let i = 0; i < 90; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = Math.random() * 5 + 5 + "s";
  snow.appendChild(s);
}
