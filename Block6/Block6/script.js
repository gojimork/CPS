if (window.screen.width < 768) {
const swiper = new Swiper('.swiper',
{
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper"
    },

    slidesPerView: "auto",
    spaceBetween: 16
});
}

let showAll = false

let readMoreBtn = document.querySelector(".readmore-btn")

let  textBtn = document.querySelector(".readmore-btn__text")

let swiperContainer = document.querySelector(".swiper")

let arrow = readMoreBtn.querySelector("before")


function showMore(){
  if (!showAll){
    swiperContainer.classList.add("swiper_height_auto");
    textBtn.textContent = "Скрыть";
    readMoreBtn.classList.replace("readmore-btn_arrow_down","readmore-btn_arrow_up")
    showAll = !showAll
  } else {
    swiperContainer.classList.remove("swiper_height_auto");
    textBtn.textContent = "Показать все";
    readMoreBtn.classList.replace("readmore-btn_arrow_up","readmore-btn_arrow_down")
    showAll = !showAll
  }
}

readMoreBtn.addEventListener('click', showMore)













