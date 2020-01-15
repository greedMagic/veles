import 'slick-carousel';
import './main-menu';
import AOS from 'aos';

let $homeSlider;
let $seeAlso;

AOS.init({
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  offset: 350,
  delay: 250,
  once: true
});

$(document).ready(function (o) {

  $homeSlider = o('.welcome__items');
  $seeAlso = o('.see-also__slides');

  $homeSlider.on('init', function (event, slick) {
    o('.welcome').removeClass('welcome--hide');
  });

  $homeSlider.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: true,
    swipe: true,
    prevArrow: $('.welcome__control.welcome__control--prev'),
    nextArrow: $('.welcome__control.welcome__control--next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          dots: false,
          arrows: true,
          swipe: false
        }
      }
    ]
  });

  $seeAlso.on('init', function (event, slick) {
    o('.see-also').removeClass('see-also--hide');
  });


  $seeAlso.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    mobileFirst: true,
    prevArrow: $('.see-also__control.see-also__control--prev'),
    nextArrow: $('.see-also__control.see-also__control--next'),
    arrows: false,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: true
        }
      }
    ]
  });
});
