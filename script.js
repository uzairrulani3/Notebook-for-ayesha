const pages = document.querySelectorAll(".page");
let index = 0;

const music = document.getElementById("music");
document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

function openBook() {
  pages[index].classList.remove("show");
  pages[index].classList.add("hidden");
  index++;
  pages[index].classList.remove("hidden");
  pages[index].classList.add("show");
}

function nextPage() {
  pages[index].classList.remove("show");
  pages[index].classList.add("hidden");
  index++;
  pages[index].classList.remove("hidden");
  pages[index].classList.add("show");
}
