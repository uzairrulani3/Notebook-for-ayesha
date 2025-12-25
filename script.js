let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(i){
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function nextPage(){
  if(current < pages.length - 1){
    current++;
    showPage(current);
  }
}

function prevPage(){
  if(current > 0){
    current--;
    showPage(current);
  }
}

function startOver(){
  current = 0;
  showPage(current);
}
