$(document).ready(function() {
    window.addEventListener('resize', changeClassNavFixed);
});


function changeClassNavFixed(){
    let nav = document.querySelector('#navbar');
    if (window.innerWidth <= 768){
        nav.classList.remove('fixed-top');
    }
    else{
        nav.classList.add('fixed-top');
    }
}