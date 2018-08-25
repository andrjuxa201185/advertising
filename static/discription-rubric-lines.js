window.addEventListener('DOMContentLoaded', function(){
    let div1 = document.getElementsByClassName("border-show-1")[0];
    let div2 = document.getElementsByClassName("border-show-2")[0];
    let div1Revers = document.getElementsByClassName("border-show-1")[1];
    let div2Revers = document.getElementsByClassName("border-show-2")[1];

    if (div1 && div2){
        window.addEventListener('scroll', function(){
            for (let i = 0 ; i < 2; i++) {
                if(div1.getBoundingClientRect().top < window.innerHeight - 300){
                    div1.style.width = "2px";
                    div1.style.height = "100%";
                    div1.addEventListener("transitionend", function(){
                        div2.style.height = "2px";
                        div2.style.width = "100%";
                    });
                };
                if(div1.getBoundingClientRect().top >= window.innerHeight){
                    div1.style.width = "0";
                    div1.style.height = "0%";
                    div2.style.height = "0px";
                    div2.style.width = "0%";
                };
            };
        });
    };

    if (div1Revers && div2Revers){
        window.addEventListener('scroll', function(){
            for (let i = 0 ; i < 2; i++) {

                if(div2Revers.getBoundingClientRect().top < window.innerHeight - 300){
                    div2Revers.style.height = "2px";
                    div2Revers.style.width = "100%";
                    div2Revers.addEventListener("transitionend", function(){
                        div1Revers.style.width = "2px";
                        div1Revers.style.height = "100%";
                    });
                };

                if(div2Revers.getBoundingClientRect().top >= window.innerHeight){
                    setTimeout(function(){
                        div2Revers.style.width = "0";
                        div2Revers.style.height = "0%";
                        div1Revers.style.height = "0px";
                        div1Revers.style.width = "0%";
                    },0);
                };
            };
        });
    };
});