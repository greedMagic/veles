import slick from 'slick-carousel';

$('.slider__items').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.slider__control.slider__control--prev'),
  nextArrow: $('.slider__control.slider__control--next')
})

$('.small-slider__items').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.small-slider__control.small-slider__control--prev'),
  nextArrow: $('.small-slider__control.small-slider__control--next')
})
