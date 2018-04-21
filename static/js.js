$(document).ready(function() {
    changeClassNavFixed();
    lessNavbar();
    window.addEventListener('resize', changeClassNavFixed);
    window.addEventListener('scroll', lessNavbar);
});


function changeClassNavFixed(){
    let nav = document.querySelector('#navbar');
    if (window.innerWidth <= 768){
        nav.classList.remove('fixed-top');
        document.getElementById('carouselExampleControls').style.marginTop = '0px';
    }
    else{
        nav.classList.add('fixed-top');
        document.getElementById('carouselExampleControls').style.marginTop = '50px';
    }
}


function lessNavbar(){
    let scrY = window.pageYOffset;
    let span = document.querySelector("h1 span");
    let navbar = document.getElementById("navbar");
    let h1 = document.querySelector("h1");
    let carusel = document.getElementById('carouselExampleControls');
    if (window.innerWidth > 768){
        if (scrY > 80){
            carusel.style.marginTop = '30px';
            span.classList.add('display-hidden-span');
            navbar.classList.add('less-navbar');
            h1.classList.add('less-font-h1');
            navbar.classList.add('navbar-expand-lg');
        }else{
            carusel.style.marginTop = '50px';
            span.classList.remove('display-hidden-span');
            navbar.classList.remove('less-navbar');
            h1.classList.remove('less-font-h1');
            navbar.classList.remove('navbar-expand-lg');
        }
    }
}