function docSlider() {
  if($('.doctors ul.slider').length) {
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
}

export default docSlider();