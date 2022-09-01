let descShowAll = false
let descMoreBtn = document.querySelector(".description__readmore-btn")
let descTextBtn = document.querySelector(".description__readmore-btn-text")
let descParagraphs = document.querySelector(".description__paragraphs")

function paragraphsShowMore(){
  if (!descShowAll){
    descParagraphs.classList.add("description__paragraphs--full-brands--opened");
    descTextBtn.textContent = "Скрыть";
    descMoreBtn.classList.replace("description__readmore-btn--arrow--down", "description__readmore-btn--arrow--up")
    descShowAll = !descShowAll
  } else {
    descParagraphs.classList.remove("description__paragraphs--full-brands--opened");
    descTextBtn.textContent = "Читать далее";
    descMoreBtn.classList.replace("description__readmore-btn--arrow--up","description__readmore-btn--arrow--down")
    descShowAll = !descShowAll
  }
}
console.log(descParagraphs)

descMoreBtn.addEventListener("click", paragraphsShowMore)