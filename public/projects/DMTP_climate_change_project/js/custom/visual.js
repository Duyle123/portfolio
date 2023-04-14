//=============== arrowHover ===================
const arrowPath = document.getElementById('arrow_svg_path');

document.getElementById('next_page_btn').onmouseover = function(){
    console.log('ArrowHover');
    arrowPath.classList.add('hover_active');
}

document.getElementById('next_page_btn').onmouseout = function(){
    console.log('ArrowNoHover');
    arrowPath.classList.remove('hover_active');
}