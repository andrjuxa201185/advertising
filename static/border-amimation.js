function BorderAnimation(elem){
    if (!elem) return;
    let border = [];
    let styleElem = getComputedStyle(elem);
    let classListBorder = ["border-l","border-t", "border-r", "border-b"];

    if (styleElem.position == "static"){
        elem.style.position = "relative";
    };

    for (let i = 0; i < 4; i++) {
        border[i] = document.createElement("div");
        border[i].classList.add("border-animation");
        border[i].classList.add(classListBorder[i]);
        elem.appendChild(border[i]);
    };

    elem.addEventListener("mouseenter", function(){
        elem.style.border = "none";
        showBorder0();
    });

    elem.addEventListener("mouseleave", function(){
        elem.style.border = "";
        border[0].removeEventListener("transitionend", showBorder1);
        border[1].removeEventListener("transitionend", showBorder2);
        border[2].removeEventListener("transitionend", showBorder3);
        for (let i = 0; i < 4; i++) {
            border[i].style.width = "";
            border[i].style.height = "";
        };
    });

    function showBorder0(){
        border[0].style.height = "100%";
        border[0].addEventListener("transitionend", showBorder1);
    };

    function showBorder1(){
        border[1].style.width = "100%";
        border[1].addEventListener("transitionend", showBorder2);
    };

    function showBorder2(){
        border[2].style.height = "100%";
        border[2].addEventListener("transitionend", showBorder3);
    };
    function showBorder3(){
        border[3].style.width = "100%";
    };
};


if(window.innerWidth > 992){
    window.addEventListener('DOMContentLoaded', function(){
        let buttons = document.getElementsByClassName("button-on-scroll");
        if (buttons[0]){
            for (let i = 0; i < buttons.length; i++) {
                new BorderAnimation(buttons[i]);
            };
        };
    });
};


// function BorderAnimate(elem){
//     let classListBorder = ["border-l","border-t", "border-r", "border-b"];
//     let borders = [];
//     let f = [];
//     let styleElem = getComputedStyle(elem);
//     if(!styleElem) return;

//     if (styleElem.position == "static"){
//         elem.style.position = "relative";
//     };

//     for (let i = 0; i < 4; i++) {
//         borders[i] = document.createElement("div");
//         borders[i].classList.add("border-animation");
//         borders[i].classList.add(classListBorder[i]);
//         elem.appendChild(borders[i]);  
//     };

//     f[0] = animate.bind(null, borders[0], "height", 0);

//     elem.addEventListener("mouseenter", f[0]);
//     elem.addEventListener("mouseleave", stopAnimate);


//     function animate(el, style, i){
//         borders[i].style[style] = "100%";
//         style = style == "width" ? "height" : "width";
//         i++;
//         if (i > 3) return;
//         f[i] = animate.bind(null, borders[i], style, i);
//         borders[i - 1].addEventListener("transitionend", f[i]);
//     };

//     function stopAnimate(){
//         for (let i = 3; i >= 0; i--) {
//             borders[i].removeEventListener("transitionend", f[i + 1]);
//             borders[i].style.height = "";
//             borders[i].style.width = "";
//         };
//     };
// };