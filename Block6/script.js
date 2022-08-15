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

let readMoreBtn = document.querySelector(".readmore-btn")
console.log(readMoreBtn);

let hiddenBnt = document.querySelector('.hidden-btn');
console.log(hiddenBnt);

let swiperContainer = document.querySelector(".swiper")
console.log(swiperContainer);

readMoreBtn.addEventListener('click', function(){
  swiperContainer.classList.add("swiper_height_auto");
  readMoreBtn.classList.add("readmore-btn_hidden");
  hiddenBnt.classList.remove('hidden-bnt_hidden')
})

hiddenBnt.addEventListener('click', function(){
  swiperContainer.classList.remove("swiper_height_auto");
  readMoreBtn.classList.remove("readmore-btn_hidden");
  hiddenBnt.classList.add('hidden-bnt_hidden')
})






