window.addEventListener('load', function(){
    let img_discription = document.getElementsByClassName('section-description-img');

    if (img_discription[0]){
        window.addEventListener('scroll', function(){
            for (let i = 0, len = img_discription.length; i < len; i++) {
                if(img_discription[i].getBoundingClientRect().top < window.innerHeight - 200){
                    img_discription[i].style.opacity = 1;
                };
                if(img_discription[i].getBoundingClientRect().top >= window.innerHeight){
                    img_discription[i].style.opacity = 0;
                };
            };
        });
    }
})