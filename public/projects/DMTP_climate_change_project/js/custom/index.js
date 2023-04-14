
//================ background Scroll =================
let statue_bg = document.getElementById('statue_bg')
let hero_title = document.getElementById('hero_title')
let building_bg = document.getElementById('building_bg')

window.addEventListener('scroll', function(){
    let num = window.scrollY;
    statue_bg.style.top = num * .5 + 'px'
    building_bg.style.top = num * 0.7 + 'px'
    hero_title.style.top = 120 + num * 0.6 +'px'
})

//=============== arrowHover ===================
const arrowPath = document.getElementById('arrow_svg_path')

document.getElementById('arrow_svg').onmouseover = function(){
    console.log('ArrowHover')
    arrowPath.classList.add('hover_active')
}

document.getElementById('arrow_svg').onmouseout = function(){
    console.log('ArrowNoHover')
    arrowPath.classList.remove('hover_active')
}