import "slick-carousel";
import slider from "./component/date";
import scroll from "./component/scroll";
import docSlider from "./component/slider";
import tabIndex from "./component/tabs";

if (window.innerWidth < 992 && document.querySelector('.slider')) {
  document.querySelector('.slick-dots').style.top = document.querySelector('.slider .pic-1').offsetHeight + 10 + "px";
}

if ($('.review__new .button a.btn').length) {
  $('.review__new .button a.btn').on('click', function () {
    $(this).toggleClass('show')
    if ($('.review__new .content.show').length) {
      $('.review__new .content').slideUp().removeClass('show');
    } else {
      $('.review__new .content').slideDown().addClass('show');
    }
  })
}

if (window.innerWidth < 992) {
  if ($('.message .button a.btn').length) {
    $('.message .button a.btn').on('click', function () {
      $(this).toggleClass('show')
      if ($('.message .container.show').length) {
        $('.message .container').slideUp().removeClass('show');
      } else {
        $('.message .container').slideDown().addClass('show');
      }
    })
  }
}
