const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header')

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    header.classList.toggle('is-active')
});