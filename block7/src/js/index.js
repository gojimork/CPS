import '../scss/style.scss';
import Swiper, {Pagination} from 'swiper';
import './desc'
import './bandsSlider'
import './techSlider'

if (window.screen.width < 768) {
    const brandsSlider = new Swiper('.brands-slider',
    {
        modules: [Pagination],

        pagination: {
          el: '.brands-slider__pagination',
          clickable: true
        },
    
        slidesPerView: "auto",
        spaceBetween: 16
    });

    const techSlider = new Swiper('.tech-slider',
    {
        modules: [Pagination],

        pagination: {
          el: '.tech-slider__pagination',
          clickable: true
        },
    
        slidesPerView: "auto",
        spaceBetween: 16
    });
    
    const priceSlider = new Swiper('.price-slider',
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


  




