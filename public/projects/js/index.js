paceOptions = {
    ajax: true,
    document: true,
}

Pace.on('done',()=>{

    gsap.timeline()
    .to('.pace',{
        opacity:0,
        duration: 2,
        ease: "power2.out"
    })

    var card = document.querySelectorAll('.card');
    card.forEach((card) => {
        card.classList.add('display')
    })

    var card1 = document.getElementById('card-1');
    card1.classList.add("flip-up");
    console.log("flip-up");

    var card2 = document.getElementById('card-2');
    card2.classList.add("flip-up-1");
    console.log("flip-up");

    var card3 = document.getElementById('card-3');
    card3.classList.add("flip-up-2");
    console.log("flip-up");
})