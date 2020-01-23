import "slick-carousel";
import slider from "./component/date";
import scroll from "./component/scroll";
import docSlider from "./component/slider";
import tabIndex from "./component/tabs";

if(window.innerWidth < 992 && document.querySelector('.slider')) {
  document.querySelector('.slick-dots').style.top = document.querySelector('.slider .pic-1').offsetHeight + 10 + "px";
}

const clickService = document.querySelector('.click__service');
const listPages = document.querySelector('.list__pages');
clickService.addEventListener('click', function(e) {
  e.preventDefault()
  listPages.classList.toggle('show')
})


// const reviewNewButton = document.querySelector('.review__new .button a.btn');
// const reviewItemImg = reviewNew.querySelector('.review__item img');

if($('.review__new .button a.btn').length) {
  $('.review__new .button a.btn').on('click', function() {
    $(this).toggleClass('show')
    if($('.review__new .content.show').length){
      $('.review__new .content').slideUp().removeClass('show');
    } else {
      $('.review__new .content').slideDown().addClass('show');
    }
    
    console.log(1);
  })
} 