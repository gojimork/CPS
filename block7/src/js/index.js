import '../scss/style.scss';
import Swiper, {Pagination} from 'swiper';
import './desc'
import './bandsSlider'
import './techSlider'
import './aside'

if (window.screen.width < 768) {
  const sliders = document.querySelectorAll('.swiper')

  sliders.forEach((el) => {
    new Swiper(el, {
      modules: [Pagination],

      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true
      },
    
      slidesPerView: "auto",
      spaceBetween: 16
    })
  })
}