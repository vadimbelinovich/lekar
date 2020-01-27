function docSlider() {
  if ($('.doctors ul.slider').length) {
    $('.doctors ul.slider').slick({
      autoplay: false,
      autoplaySpeed: 6000,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: 'unslick'
        }
      ]
    });
  }

  if ($('ul.review__list').length) {
    $('ul.review__list').slick({
      autoplay: false,
      autoplaySpeed: 6000,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: 'unslick'
        }
      ]
    });
  }

  if ($('main.team ul.list').length) {
    $('main.team ul.list').slick({
      autoplay: false,
      autoplaySpeed: 6000,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: 'unslick'
        }
      ]
    });
  }
}

export default docSlider();