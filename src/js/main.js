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