const wrapper = document.querySelector('.wrapper');
const menuSwitch =  document.querySelector("#menu-switch");

function scroll() {
  menuSwitch.addEventListener('click', function () {
    if(menuSwitch.checked === true) wrapper.classList.add('no-scroll');
    else wrapper.classList.remove('no-scroll');
  })
} 

export default scroll();