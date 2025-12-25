const pages = document.querySelectorAll('.page');
let current = 0;

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const music = document.getElementById('music');

function update(){
  pages.forEach(p=>p.classList.remove('active'));
  pages[current].classList.add('active');

  prev.style.display = current === 0 ? 'none' : 'inline-block';
  start.style.display = current === 0 ? 'inline-block' : 'none';
  next.style.display = (current > 0 && current < 5) ? 'inline-block' : 'none';
  restart.style.display = current === 5 ? 'inline-block' : 'none';
}

start.onclick = () => {
  current = 1;
  music.play();
  update();
};

next.onclick = () => { current++; update(); };
prev.onclick = () => { current--; update(); };

restart.onclick = () => {
  current = 0;
  update();
};

// Snow generator

const snow = document.querySelector('.snow');
for(let i=0;i<80;i++){
  const s=document.createElement('span');
  s.style.left=Math.random()*100+'vw';
  s.style.animationDuration=(Math.random()*5+5)+'s';
  s.style.animationDelay=Math.random()*5+'s';
  snow.appendChild(s);
}

update();
