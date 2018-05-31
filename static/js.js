$(document).ready(function() {
    lessNavbar();
    window.addEventListener('scroll', lessNavbar);
    window.addEventListener('resize', lessNavbar);

    let ask =  document.getElementById('center');
    ask.addEventListener('click', function(){
        let f = document.getElementById('divformMessage');
        let chat = document.getElementById('chat');
        chat.style.display = 'none';
        f.style.visibility = 'visible';
        f.style.opacity = 1;

        if (window.innerHeight > 500){
            f.style.width = '350px';
            f.style.height = '405px';
        }else{
            let textarea = document.getElementById('textArea');
            textarea.setAttribute('rows', 4);
            if (window.innerWidth < 768){
                f.style.height = '330px';
                f.style.width = '400px';
            }else{
                f.style.height = window.innerHeight - 100 + 'px';
                f.style.width = '400px';
            }
        }
    });

    let close_ask = document.getElementsByClassName('close-window-message')[0];
    close_ask.addEventListener('click', function(){
        let f = document.getElementById('divformMessage');
        let chat = document.getElementById('chat');
        chat.style.display = 'block';
        f.style.width = '0px';
        f.style.height = '0px';
        f.style.visibility = 'hidden';
        f.style.opacity = 0;
    });

    

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