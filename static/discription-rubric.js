window.addEventListener('load', function(){
    let img_discription = document.getElementsByClassName('section-description-rubric-div-img');
    if (img_discription[0]){
        window.addEventListener('scroll', function(){
            let flag = true;
            if(flag){
                let top_screen_scroll = window.innerHeight + window.pageYOffset;
            
                for (let i = 0; i < 2; i++) {
                    let topElementInDocument = img_discription[i].getBoundingClientRect().top + window.pageYOffset;
                    if(top_screen_scroll > topElementInDocument + 250){
                        img_discription[i].style.opacity = 1;
                    };
                };
                flag = false;
            }
        });
    }
})