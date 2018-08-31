window.addEventListener("DOMContentLoaded", function(){
    lessNavbar();
    window.addEventListener('scroll', lessNavbar);
    window.addEventListener('resize', lessNavbar);
    
    if(window.innerWidth >= 1280){
        let img = document.getElementsByClassName('image-scroll');
        if(img[0]){
            
            window.addEventListener('scroll', function(){
                let k = (1600 - window.innerWidth);
                let speed = (window.innerWidth < 1400)? 4 : 3;
                for (let i = 0; i < 2; i++) {
                    img[i].style.top = (window.pageYOffset - 1020 + k) / speed + 'px';
                };
                for (let i = 2; i < 4; i++) {
                    img[i].style.top = (window.pageYOffset - 1410 + k) / speed + 'px';
                };
            });
        };
    };


    window.addEventListener("scroll", function(){
        let buttons = document.getElementsByClassName('button-on-scroll');
        if(buttons[0]){
            for (let i = 0, len = buttons.length; i < len; i++) {
                if(buttons[i].getBoundingClientRect().top < window.innerHeight - 50){
                    buttons[i].style.opacity = 1;
                    buttons[i].style.top = '50%';
                };

                if(buttons[i].getBoundingClientRect().top >= window.innerHeight){
                    buttons[i].style.opacity = 0;
                    buttons[i].style.top = '80%';
                };

                buttons[i].addEventListener("mousedown", buttonDown);
                buttons[i].addEventListener("mouseup", buttonUp);
                buttons[i].addEventListener("mouseleave", buttonUp);
            };
        };
    });
    

    let ask =  document.getElementById('center');
    if(ask){
        ask.addEventListener('click', function(){
            let f = document.getElementById('divformMessage');
            let chat = document.getElementById('chat');
            chat.style.display = 'none';
            f.style.visibility = 'visible';
            f.style.opacity = 1;
            if (window.innerHeight > 450){
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
                };
            };
        });
    };


    let close_ask = document.getElementsByClassName('close-window-message')[0];
    if(close_ask){
        close_ask.addEventListener('click', function(){
            let f = document.getElementById('divformMessage');
            let chat = document.getElementById('chat');
            chat.style.display = 'block';
            f.style.width = '0px';
            f.style.height = '0px';
            f.style.visibility = 'hidden';
            f.style.opacity = 0;
        });
    };

});


function buttonDown(){
    this.style.transition = "none";
    this.style.transform = "scale(0.98)";
};
function buttonUp(){
    this.style.transform = "scale(1)";
    this.style.transition = "";
};

function lessNavbar(){
    let scrY = window.pageYOffset;
    let span = document.querySelector("h1 span");
    let navbar = document.getElementById("navbar");
    let h1 = document.querySelector("h1");

    if(span && navbar && h1){
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
};