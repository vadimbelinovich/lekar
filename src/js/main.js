import "slick-carousel";
import slider from "./component/date";
import scroll from "./component/scroll";
import docSlider from "./component/slider";
import tabIndex from "./component/tabs";

if(window.innerWidth < 992) {
  document.querySelector('.slick-dots').style.top = document.querySelector('.slider .pic-1').offsetHeight + 10 + "px";
}