const pages = document.querySelectorAll('.page');
let index = 0;
const music = document.getElementById('music');

function show(){
  pages.forEach(p=>p.classList.remove('active'));
  pages[index].classList.add('active');
}

function next(){
  if(music.paused) music.play();
  index = Math.min(index+1, pages.length-1);
  show();
}

function prev(){
  index = Math.max(index-1, 0);
  show();
}

function restart(){
  index = 0;
  show();
}

// Snow (natural random fall)
const snow = document.querySelector('.snow');
for(let i=0;i<80;i++){
  let s = document.createElement('span');
  s.style.left = Math.random()*100 + 'vw';
  s.style.animationDuration = 5 + Math.random()*6 + 's';
  s.style.opacity = Math.random();
  snow.appendChild(s);
}

show();
