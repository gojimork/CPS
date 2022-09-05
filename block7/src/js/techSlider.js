if (window.screen.width >= 768) {
  let techShowAll = false
  let techMoreBtn = document.querySelector(".tech-slider__readmore-btn")
  let techTextBtn = document.getElementById("tech-btn")
  let techWrapper = document.querySelector(".tech-slider__wrapper")

  function wrapperShowMore(){
    if (!techShowAll){
     techWrapper.classList.add("tech-slider__wrapper--full-tech--opened");
     techTextBtn.textContent = "Скрыть";
     techMoreBtn.classList.replace("tech-slider__readmore-btn--arrow--down", "tech-slider__readmore-btn--arrow--up")
     techShowAll = !techShowAll
  } else {
    techWrapper.classList.remove("tech-slider__wrapper--full-tech--opened");
    techTextBtn.textContent = "Показать все";
    techMoreBtn.classList.replace("tech-slider__readmore-btn--arrow--up","tech-slider__readmore-btn--arrow--down")
    techShowAll = !techShowAll
  }
}

techMoreBtn.addEventListener("click", wrapperShowMore)

}