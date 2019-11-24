function date() {
  const currentTime = new Date();
  const getYear = currentTime.getFullYear();
  const year = document.querySelector('.date');
  if(year){
    year.innerHTML = getYear;
  }
}

export default date();