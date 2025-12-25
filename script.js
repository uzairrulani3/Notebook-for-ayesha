const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

function openBook() {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("p1").classList.remove("hidden");
}

function nextPage(a,b){
  document.getElementById(a).classList.add("hidden");
  document.getElementById(b).classList.remove("hidden");
}

function startOver(){
  location.reload();
}

const snow = document.querySelector(".snow");

for(let i=0;i<70;i++){
  const s = document.createElement("span");
  const size = Math.random()*6+3;
  s.style.width = size+"px";
  s.style.height = size+"px";
  s.style.left = Math.random()*100+"vw";
  s.style.animationDuration = Math.random()*6+6+"s";
  s.style.opacity = Math.random();
  snow.appendChild(s);
}
