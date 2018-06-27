window.addEventListener('load', function(){
    let formElements = document.getElementsByClassName('footer-form-element');
    let flagForPressText = false;

    if (formElements[0]){
        window.addEventListener('scroll', function(){
            let formElements = document.getElementsByClassName('footer-form-element');
            let topFooterFormInDoc = window.pageYOffset + formElements[0].getBoundingClientRect().top;
            let topScreenScroll = window.innerHeight + window.pageYOffset;
            let contactBlock = document.getElementsByClassName('wrapper-contact-footer')[0];


            if (topScreenScroll > topFooterFormInDoc + 200){
                let t = 1000;
                for (let i = 0; i < formElements.length; i++) {
                    setTimeout(function(){
                        formElements[i].style.opacity = 1;
                    }, t);
                    t = t + 200;
                };

                if (!flagForPressText){
                    writeTextByJS(80);
                    flagForPressText = true;
                };
            };
        });
    };
    
});


function writeTextByJS(speed){

	let ele = document.getElementsByClassName('footer-h4')[0];
	let txt = 'задать вопрос'.split("");

	let interval = setInterval(function(){

		if(!txt[0]){
			return clearInterval(interval);
		};

		ele.innerHTML += txt.shift();
	}, speed != undefined ? speed : 100);
};