import 'slick-carousel';
import MmenuLight from 'mmenu-light/dist/mmenu-light';

$('.slider__items').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.slider__control.slider__control--prev'),
  nextArrow: $('.slider__control.slider__control--next'),
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true,
      }
    },
  ]
})

$('.small-slider__items').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.small-slider__control.small-slider__control--prev'),
  nextArrow: $('.small-slider__control.small-slider__control--next'),
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        slidesToShow: 3,
        dots: false
      }
    }
  ]
})

const $header = $('.header__main-menu');
let scrollPrev = 0;

$(window).scroll(function () {
  const scrolled = $(window).scrollTop();

  if (scrolled > 0 && scrolled > scrollPrev) {
    $header.addClass('header__main-menu--out');
  } else {
    $header.removeClass('header__main-menu--out');
  }
  scrollPrev = scrolled;
});
