$(function () {
  $('.hero__banner-slider').slick({
    dots: true,
    prevArrow: '<button class="hero__banner-slider__btn hero__banner-slider__btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="hero__banner-slider__btn hero__banner-slider__btnnext"><img src="images/arrow-right.svg" alt=""></button>'
  })

  $('.search__tabs-item').on('click', function(e) {
    e.preventDefault();

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');

    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');

  });


});