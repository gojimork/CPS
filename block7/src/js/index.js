import '../scss/style.scss';
import Swiper, {Pagination} from 'swiper';
import './desc'
import './bandsSlider'
import './techSlider'
import './aside'

if (window.screen.width < 768) {
  new Swiper('.brands-slider',
    {
        modules: [Pagination],

        pagination: {
          el: '.brands-slider__pagination',
          clickable: true
        },
    
        slidesPerView: "auto",
        spaceBetween: 16
    });

  new Swiper('.tech-slider',
    {
        modules: [Pagination],

        pagination: {
          el: '.tech-slider__pagination',
          clickable: true
        },
    
        slidesPerView: "auto",
        spaceBetween: 16
    });
    
  new Swiper('.price-slider',
    {
        modules: [Pagination],

        pagination: {
          el: '.price-slider__pagination',
          clickable: true
        },
    
        slidesPerView: "auto",
        spaceBetween: 16
    });

}