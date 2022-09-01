let brandsShowAll = false
let brandsMoreBtn = document.querySelector(".brands-slider__readmore-btn")
let brandsTextBtn = document.querySelector(".brands-slider__readmore-btn-text")
let brandsWrapper = document.querySelector(".brands-slider__wrapper")
function brandsShowMore(){
  if (!brandsShowAll){
    brandsWrapper.classList.add("brands-slider__wrapper--full-brands--opened");
    brandsTextBtn.textContent = "Скрыть";
    brandsMoreBtn.classList.replace("brands-slider__readmore-btn--arrow--down","brands-slider__readmore-btn--arrow--up")
    brandsShowAll = !brandsShowAll
  } else {
    brandsWrapper.classList.remove("brands-slider__wrapper--full-brands--opened");
    brandsTextBtn.textContent = "Показать все";
    brandsMoreBtn.classList.replace("brands-slider__readmore-btn--arrow--up","brands-slider__readmore-btn--arrow--down")
    brandsShowAll = !brandsShowAll
  }
}

brandsMoreBtn.addEventListener('click', brandsShowMore)