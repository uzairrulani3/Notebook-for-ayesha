const pages = document.querySelectorAll('.page')
const nav   = document.querySelector('.nav')
const music = document.getElementById('music')

let current = 0

function update(){
  pages.forEach(p=>p.classList.remove('active'))
  pages[current].classList.add('active')

  // NAV visibility rules
  if(current === 0){
    nav.style.display = "none"
  } else if(current === pages.length-1){
    nav.style.display = "none"
  } else {
    nav.style.display = "flex"
  }
}

function openBook(){
  if(music.paused) music.play()
  current = 1
  update()
}

function next(){
  if(current < pages.length-1){
    current++
    update()
  }
}

function prev(){
  if(current > 0){
    current--
    update()
  }
}

function restart(){
  current = 0
  update()
}

/* Snow */
const snow=document.querySelector('.snow')
for(let i=0;i<90;i++){
  const s=document.createElement('span')
  s.style.left=Math.random()*100+'vw'
  s.style.animationDuration=(Math.random()*5+5)+'s'
  snow.appendChild(s)
}

update()
