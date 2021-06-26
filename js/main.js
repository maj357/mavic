$(function () {

  $('.products__slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="48"/><path d="M34.2184 16L26 24L34.2184 32"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="48"/><path d="M25.7816 32L34 24L25.7816 16"/></svg></button>',
    infinite: false,
  });

  $('.questions__item-title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.questions__item-title').not(this).removeClass('in').next().slideUp();
  });

  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
    responsiveWidth: 420,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

});