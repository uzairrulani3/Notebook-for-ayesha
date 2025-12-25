const pages=document.querySelectorAll('.page')
const music=document.getElementById('music')
let current=0

function show(n){
  pages.forEach(p=>p.classList.remove('active'))
  pages[n].classList.add('active')
}

function openBook(){
  if(music.paused) music.play()
  current=1
  show(current)
}

function next(){
  if(current<pages.length-1){
    current++
    show(current)
  }
}

function prev(){
  if(current>0){
    current--
    show(current)
  }
}

function restart(){
  current=0
  show(current)
}

/* Snow */
const snow=document.querySelector('.snow')
for(let i=0;i<90;i++){
  const s=document.createElement('span')
  s.style.left=Math.random()*100+'vw'
  s.style.animationDuration=(Math.random()*5+5)+'s'
  snow.appendChild(s)
}
