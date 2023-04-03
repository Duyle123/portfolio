window.addEventListener('scroll',reveal); 
window.addEventListener('DOMContentLoaded',reveal);


function reveal() {

    var reveal50 = document.querySelectorAll('.reveal50');

    var windowheight = window.innerHeight;

    var timelineBar = document.querySelectorAll('.timeline-bar');

    var highlight = document.querySelectorAll('.highlight');

    for (var i = 0; i < reveal50.length; i++) {
        var revealtop = reveal50[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
            reveal50[i].classList.add('active');
        }
    }

    for (var i=0; i < timelineBar.length; i++) {
        var revealtop = timelineBar[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if (revealtop < windowheight - revealpoint){
            timelineBar[i].classList.add('active');
        }
    }

    for (var i=0; i < highlight.length; i++) {
        var revealtop = highlight[i].getBoundingClientRect().top;
        var revealpoint = 30;

        if (revealtop < windowheight - revealpoint){
            highlight[i].classList.add('active');
        }
    }
}

