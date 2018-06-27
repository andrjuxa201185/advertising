$(document).ready(function() {
    lessNavbar();
    window.addEventListener('scroll', lessNavbar);
    window.addEventListener('resize', lessNavbar);


    let img = document.getElementsByClassName('image-scroll');
    if(img[0]){
        window.addEventListener('scroll', function(){
            let k = 0;
            let speed = 3;
            let o = window.innerWidth / window.innerHeight;

            if(o > 1.70 && window.innerWidth >= 1280){
                if ( window.innerHeight >= 750 && window.innerWidth > 1400){
                    k = 120;
                    speed = 3;
                }else if (window.innerHeight < 750 || window.innerWidth < 1400){
                    k = 100;
                    speed = 5;
                };
                let sy = (window.pageYOffset - window.innerHeight - k) / speed;
                let sy2 = (window.pageYOffset - window.innerHeight - (window.innerHeight / 2) - k) / speed;
                img[0].style.top = sy + 'px';
                img[1].style.top = sy + 'px';
                img[2].style.top = sy2 + 'px';
                img[3].style.top = sy2 + 'px';
            };

            if (window.innerWidth < 1280){
                let center_screen = (window.innerHeight / 2);
                for (let i = 0; i < 4; i++) {
                    let top_img = img[i].getBoundingClientRect().top + (img[i].offsetHeight / 2);
                    if(top_img < center_screen + 70 && top_img > center_screen - 70){
                        img[i].style.transform = 'scale(1.2)';
                    }else{
                        img[i].style.transform = 'scale(1)';
                    }
                }
            };
        });
    };


    window.addEventListener('scroll', function(){
        let flag = true;
        if(flag){
            let buttons = document.getElementsByClassName('button-on-scroll');
            if(buttons[0]){
                let top_screen = window.innerHeight + window.pageYOffset;
            
                for (let i = 0; i < 4; i++) {
                    let top_element = buttons[i].getBoundingClientRect().top + window.pageYOffset;
                    if(top_screen > top_element + 50){
                        buttons[i].style.opacity = 1;
                        buttons[i].style.top = '50%';
                    };
                };
            };
            flag = false;
        }
    });
    
    
    window.addEventListener('scroll', function(){
        let flag = true;
        if(flag){
            let buttons9 = document.getElementsByClassName('button9');
            if(buttons9[0]){
                let top_screen = window.innerHeight + window.pageYOffset;
            
                for (let i = 0; i < 2; i++) {
                    let top_element = buttons9[i].getBoundingClientRect().top + window.pageYOffset;
                    if(top_screen > top_element + 100){
                        buttons9[i].style.opacity = 1;
                    };
                };
            };
            flag = false;
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
                }
            }
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