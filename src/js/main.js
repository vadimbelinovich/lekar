import "slick-carousel";
import "lightbox2";
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

// $('.popup-open').on('click', function (e) {
//   e.preventDefault()
//   $('.popup').fadeIn()
//   $('.popup h2').text('Хотите получить более детальную информацию или записаться на приём?')
// })

// $('.modal .close').on('click', function (e) {
//   $('.popup').fadeOut();

//   $('.modal input').each(function (e) {
//     if ($(this).val() !== 'Записаться') {
//       $(this).val('')
//     }
//   })
// })

// function openPopup() {
//   setTimeout(function () {
//     $('.popup').fadeIn();
//     $('.popup h2').text('Остались вопросы? Мы перезвоним Вам в ближайшее время.')
//   }, 40000)
// }

// openPopup()

document.addEventListener('wpcf7mailsent', function (event) {
  setTimeout(function () {
    $('.popup').fadeOut();
  }, 1000)
}, false);