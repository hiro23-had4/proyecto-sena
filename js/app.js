// responsive navegación
const menuBtn = document.querySelector(".menu_btn");
const navegacion = document.querySelector(".navegacion");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navegacion.classList.toggle("active");
});


// video navegacion
const btns = document.querySelectorAll(".navegacion_btn");
const slides = document.querySelectorAll(".video_slide");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

//swiper slide
