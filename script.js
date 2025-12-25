const pages=document.querySelectorAll('.page')
const music=document.getElementById('music')

let i=0

function show(n){
  pages.forEach(p=>p.classList.remove('active'))
  pages[n].classList.add('active')
}

function openBook(){
  if(music.paused) music.play()
  i=1
  show(i)
}

function next(){
  if(i<pages.length-1){
    i++
    show(i)
  }
}

function prev(){
  if(i>0){
    i--
    show(i)
  }
}

function restart(){
  i=0
  show(i)
}

/* Snow */
const snow=document.querySelector('.snow')
for(let i=0;i<90;i++){
  const s=document.createElement('span')
  s.style.left=Math.random()*100+'vw'
  s.style.animationDuration=(Math.random()*5+5)+'s'
  snow.appendChild(s)
}
