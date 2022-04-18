$(function () {
   $('.intro__slider').slick({
      dots: true,
      prevArrow: '<img class="arrows arrow-top" src="images/arrow-top.svg">',
      nextArrow: '<img class="arrows arrow-bottom" src="images/arrow-bottom.svg">',
      fade: true,
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
   });
   $('.products__content').slick({
      asNavFor: '.products__name',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      // infinite: true,

   });
});