const pages = document.querySelectorAll(".page");
const controls = document.getElementById("controls");
const music = document.getElementById("bgMusic");

let index = 0;

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function openBook() {
  music.play();
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
  if (index > 1) {
    index--;
    showPage(index);
  }
}

/* Snow generator */
const snow = document.querySelector(".snow");
for (let i = 0; i < 80; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = Math.random() * 5 + 5 + "s";
  snow.appendChild(s);
}
