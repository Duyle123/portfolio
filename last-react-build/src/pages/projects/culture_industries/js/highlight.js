window.addEventListener('scroll',reveal); 
window.addEventListener('DOMContentLoaded',reveal);


function reveal() {

    var reveal400 = document.querySelectorAll('.reveal400');

    var reveal700 = document.querySelectorAll('.reveal700');

    var reveal50 = document.querySelectorAll('.reveal100')

    for (var i = 0; i < reveal400.length; i++) {
        var windowheight = window.innerHeight;
        console.log(windowheight)
        var revealtop = reveal400[i].getBoundingClientRect().top;
        console.log(revealtop)
        var revealpoint = 400;

        if (revealtop < windowheight - revealpoint) {
            reveal400[i].classList.add('active');
        }
    }

    for (var i = 0; i < reveal700.length; i++) {
        var windowheight = window.innerHeight;
        console.log(windowheight)
        var revealtop = reveal700[i].getBoundingClientRect().top;
        console.log(revealtop)
        var revealpoint = 700;

        if (revealtop < windowheight - revealpoint) {
            reveal700[i].classList.add('active');
        }
    }

    for (var i = 0; i < reveal50.length; i++) {
        var windowheight = window.innerHeight;
        console.log(windowheight)
        var revealtop = reveal50[i].getBoundingClientRect().top;
        console.log(revealtop)
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveal50[i].classList.add('active');
        }
    }
}
