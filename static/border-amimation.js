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

    elem.addEventListener("mouseover", borderShow.bind(null, 0, "height"));


    elem.addEventListener("mouseout", function(){
        elem.style.border = '';
        for (let i = 0; i > 4; i++) {
            border[i].removeEventListener("transitionend", borderShow.bind(null, i, "height"));
        };
        for (let i = 0; i < 4; i++) {
            border[i].style.width = '';
            border[i].style.height = '';
        };
    });


    function borderShow(i, style){
        elem.style.border = "none";
        if (i < 0 || i > 3) return;
        border[i].style[style] = "100%";
        style = style == "height" ? "width" : "height";
        border[i].addEventListener("transitionend", borderShow.bind(null, ++i, style));
    };


    // elem.addEventListener("mouseover", function(){
    //     elem.style.border = "none";
    //     border[0].style.height = "100%";
    //     border[0].addEventListener("transitionend", borderShow0.bind(null, "la"));
    // });

    // elem.addEventListener("mouseout", function(){
    //     border[0].removeEventListener("transitionend", borderShow0);
    //     border[0].style.height = "";
    // });


    // function borderShow0(p){
    //     alert('dgyjfy ' + p);
    // };
};






window.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementsByClassName("button-on-scroll")[0];
    let borderAnimation = new BorderAnimation(button);
});