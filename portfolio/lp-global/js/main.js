$(document).ready(function() {

  // Mobail Nav
  // $('.navbar-toggle').on('click', function () {
  //     $('.main-nav ul').slideToggle('show');
  // });

  $('.navbar-toggle').click(function(){
    $(this).toggleClass("activ-btn")
  });

  // Add class menu
  $(function(){
    $('.navbar-toggle').click(function(){
      $('.navbar-collapse').toggleClass('bg-nav');
      $('body').toggleClass('index');
    });
  });
  $('.nav li a').on('click', function () {
    $('.navbar-collapse').removeClass('bg-nav');
    $('body').removeClass('index');
  });

  // Scroll Speed
  $('.navbar-nav, .link-down').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Carusel - About
  $(".about-slider").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 581,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Carusel - Artist
  $(".artists-level-1").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".artists-level-2").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".artists-level-3").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Carusel - Partners
  $(".partners-level-1").slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      ,{
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".partners-level-2").slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      ,{
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});