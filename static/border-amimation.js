function BorderAnimation(elem){
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



    // elem.addEventListener("mouseover", borderShow.bind(null, 0, "height"));

    // elem.addEventListener("mouseout", function(){
    //     elem.style.border = '';
    //     for (let i = 0; i > 4; i++) {
    //         border[i].removeEventListener("transitionend", borderShow.bind(null, i, "height"));
    //     };
    //     for (let i = 0; i < 4; i++) {
    //         border[i].style.width = '';
    //         border[i].style.height = '';
    //     };
    // });

    function showBorder(i, style){
        elem.style.border = "none";
        border[i].style[style] = "100%";
    };
};


// style = style == "height" ? "width" : "height";
// border[i].addEventListener("transitionend", showBorder(null, ++i, style));

window.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementsByClassName("button-on-scroll")[0];
    let borderAnimation = new BorderAnimation(button);
});