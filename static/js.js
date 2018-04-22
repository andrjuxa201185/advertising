$(document).ready(function() {
    // changeNavFixed();
    lessNavbar();
    // window.addEventListener('resize', changeNavFixed);
    window.addEventListener('scroll', lessNavbar);
    window.addEventListener('resize', lessNavbar);
});


// function changeNavFixed(){
//     let nav = document.querySelector('#navbar');
//     if (window.innerWidth <= 768){
//         nav.style.position = 'relative';
//     }else{
//         nav.style.position = 'fixed';
//     }
// };


function lessNavbar(){
    let scrY = window.pageYOffset;
    let span = document.querySelector("h1 span");
    let navbar = document.getElementById("navbar");
    let h1 = document.querySelector("h1");
    if (window.innerWidth > 768){
        if (scrY > 80){
            span.classList.add('display-hidden-span');
            navbar.classList.add('less-navbar');
            h1.classList.add('less-font-h1');
            navbar.classList.add('navbar-expand-md');
        }else{
            span.classList.remove('display-hidden-span');
            navbar.classList.remove('less-navbar');
            h1.classList.remove('less-font-h1');
            navbar.classList.remove('navbar-expand-md');
        };
    };
};