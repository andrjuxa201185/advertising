$(document).ready(function() {
    lessNavbar();
    window.addEventListener('scroll', lessNavbar);
    window.addEventListener('resize', lessNavbar);
});


function lessNavbar(){
    let scrY = window.pageYOffset;
    let span = document.querySelector("h1 span");
    let navbar = document.getElementById("navbar");
    let h1 = document.querySelector("h1");
    let carusel = document.getElementById('carouselExampleControls');

    if (window.innerWidth > 576){
        if (scrY > 80){
            span.classList.add('display-hidden-span');
            navbar.classList.add('less-navbar');
            h1.classList.add('less-font-h1');
            if (window.innerWidth < 768){
                h1.style.marginLeft = "20px";
            }
            navbar.classList.add('navbar-expand-sm');
        }else{
            span.classList.remove('display-hidden-span');
            navbar.classList.remove('less-navbar');
            h1.classList.remove('less-font-h1');
            navbar.classList.remove('navbar-expand-sm');
        };
    };
};