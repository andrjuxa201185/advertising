window.addEventListener('load', function(){
    let formElements = document.getElementsByClassName('footer-form-element');
    let flagForPressText = false;

    if (formElements[0]){
        window.addEventListener('scroll', function(){
            let formElements = document.getElementsByClassName('footer-form-element');

            if (formElements[0].getBoundingClientRect().top < window.innerHeight - 200){
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
            if (formElements[0].getBoundingClientRect().top >= window.innerHeight){
                let t = 300;
                for (let i = 0, len = formElements.length; i < len; i++) {
                    setTimeout(function(){
                        formElements[i].style.opacity = 0;
                    }, t);
                    t = t + 200;
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