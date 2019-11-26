function docSlider() {
  if($('.doctors ul.slider').length) {
    $('.doctors ul.slider').slick({
      autoplay: false,
      dots: true,
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