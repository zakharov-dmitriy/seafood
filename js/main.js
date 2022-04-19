$(function () {
   $('.intro__slider').slick({
      dots: true,
      prevArrow: '<img class="arrows arrow-top" src="images/arrow-top.svg">',
      nextArrow: '<img class="arrows arrow-bottom" src="images/arrow-bottom.svg">',
      fade: true,
      responsive: [{
         breakpoint: 361,
         settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
         }
      }]
   });

   $('.products__name').slick({
      slidesToShow: 4,
      slidseToScroll: 1,
      asNavFor: '.products__content',
      focusOnSelect: true,
      vertical: true,
      prevArrow: '<button type="button"><img class="prod-arrows prod-arrow-top" src="images/prod-arrow-top.svg"></button>',
      nextArrow: '<button type="button"><img class="prod-arrows prod-arrow-bottom" src="images/prod-arrow-bottom.svg"></button>',
      centerMode: true,
      responsive: [
         {
            breakpoint: 969,
            settings: {
               vertical: false,
               slidesToShow: 3,
               arrows: false,
               dots: true,
            }
         },
         {
            breakpoint: 769,
            settings: {
               vertical: false,
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         },
      ]
   });
   $('.products__content').slick({
      asNavFor: '.products__name',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      // infinite: true,
   });

   $('.menu__btn').on('click', function () {
      $('.header__menu-list').toggleClass('header__menu-list--active');
   });
});