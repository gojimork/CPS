if (window.screen.width < 768) {
const swiper = new Swiper('.section',
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

let swiperWrapper = document.querySelector(".swiper-wrapper")



function showMore(){
  if (!showAll){
    swiperWrapper.classList.add("swiper-wrapper_height_auto");
    textBtn.textContent = "Скрыть";
    readMoreBtn.classList.replace("readmore-btn_arrow_down","readmore-btn_arrow_up")
    showAll = !showAll
  } else {
    swiperWrapper.classList.remove("swiper-wrapper_height_auto");
    textBtn.textContent = "Показать все";
    readMoreBtn.classList.replace("readmore-btn_arrow_up","readmore-btn_arrow_down")
    showAll = !showAll
  }
}

readMoreBtn.addEventListener('click', showMore)













