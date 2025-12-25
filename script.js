const pages = [
  "assets/page1.jpg",
  "assets/page2.jpg",
  "assets/page3.jpg",
  "assets/page4.png",
  "assets/page5.jpg",
  "assets/page6.jpg"
];

let current = 0;

function openBook(){
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("notebook").classList.remove("hidden");
  document.getElementById("bgMusic").play();
}

function nextPage(){
  if(current < pages.length - 1){
    current++;
    updatePage();
  }
}

function prevPage(){
  if(current > 0){
    current--;
    updatePage();
  }
}

function updatePage(){
  const img = document.getElementById("pageImage");
  img.style.animation = "none";
  img.offsetHeight;
  img.style.animation = null;
  img.src = pages[current];
}

/* Snow generator */

const snowBox = document.querySelector(".snow");

for(let i = 0; i < 80; i++){
  const s = document.createElement("span");
  const size = Math.random() * 5 + 2;
  s.style.width = size + "px";
  s.style.height = size + "px";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = Math.random() * 5 + 5 + "s";
  snowBox.appendChild(s);
}
