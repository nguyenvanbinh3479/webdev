$(document).ready(function(){
    $('.bxslider').bxSlider({
      pager: false,
    });
  });

  $('.menu2').click (function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('show');
  });