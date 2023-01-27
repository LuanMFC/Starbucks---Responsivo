let images = document.querySelectorAll(".milkShakeContent img");

function ToggleMilkShake1(){
    images[1].classList.remove("milkShakeContentImgSelected");
    images[2].classList.remove("milkShakeContentImgSelected");
    images[0].classList.add("milkShakeContentImgSelected");
}

function ToggleMilkShake2(){
    images[0].classList.remove("milkShakeContentImgSelected");
    images[2].classList.remove("milkShakeContentImgSelected");
    images[1].classList.add("milkShakeContentImgSelected");
}

function ToggleMilkShake3(){

    images[0].classList.remove("milkShakeContentImgSelected");
    images[1].classList.remove("milkShakeContentImgSelected");
    images[2].classList.add("milkShakeContentImgSelected");
}

function ToglleTheme(){
    let js_theme = document.querySelector(".container");
    js_theme.classList.toggle("Dark");

    let js_color = document.querySelectorAll(".navBtn");
    js_color[0].classList.toggle("Color");
    js_color[1].classList.toggle("Color");
    js_color[2].classList.toggle("Color");
    js_color[3].classList.toggle("Color");

    let js_textTitle = document.querySelector(".mainContentTitle");
    js_textTitle.classList.toggle("Color");

    let js_textDescription = document.querySelector(".MainContentDescription");
    js_textDescription.classList.toggle("Color");


    let js_BTntheme = document.querySelector(".navBtnTheme");
    js_BTntheme.classList.toggle("navBtnThemeDark");

    let span1 = document.querySelector(".nameThemeBtn");
    span1.classList.toggle("nameThemeBtnD");

    var span2 = document.querySelector(".nameThemeBtn").className;


    if (span2 == "nameThemeBtn"){
        span1.textContent = ' Dark.';
    }

    else{
        span1.textContent = 'Ligth';
    }

    let js_img = document.querySelectorAll(".iconsRedesContent");
    js_img[0].classList.toggle("iconsRedesImgb");
    js_img[1].classList.toggle("iconsRedesImgb");
    js_img[2].classList.toggle("iconsRedesImgb");

    let js_img2 = document.querySelectorAll(".iconsRedesIm");
    js_img2[3].classList.toggle("iconsRedesImh");
    js_img2[1].classList.toggle("iconsRedesImh");
    js_img2[2].classList.toggle("iconsRedesImh");


}