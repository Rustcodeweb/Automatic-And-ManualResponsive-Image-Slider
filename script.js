const slides = document.querySelector(".slider-inner-container").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");

let index = 0;

function autoPlay(){
  nextSlide();
  updateDotIndicator();
}

function nextSlide(){
  if (index == slides.length - 1) {
    index = 0;
  }
  else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for(let i=0; i < slides.length; i++){
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

let timer = setInterval(autoPlay, 5000);

function prevSlide(){
  if (index == 0) {
    index = slides.length - 1;
  }
  else{
    index--;
  }
  changeSlide();
}

prev.addEventListener("click", function(){
  prevSlide();
  updateDotIndicator();
  resetTimer();
})

next.addEventListener("click", function(){
  nextSlide();
  updateDotIndicator();
  resetTimer();
})

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoPlay, 5000);
}

dotIndicator();

function dotIndicator(){
  for(let i=0; i < slides.length; i++){
    const div = document.createElement("div");
    div.setAttribute("onclick", "indicateSlide(this)");
    div.id = i;
    if(i == 0){
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}

function indicateSlide(element){
  index = element.id;
  changeSlide();
  updateDotIndicator();
  resetTimer();
}

function updateDotIndicator(){
  for(let i=0; i < indicator.children.length; i++){
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}
