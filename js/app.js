// slide logo
const btnText = document.getElementById("swiper-showmore");
const btnImg = document.querySelector(".swiper-more-button");
const btnMoreLogos = document.querySelector("#btn-more-logos");
const slide = document.getElementsByClassName("logos");
// slide tech
const slideTech = document.getElementsByClassName("technics");
const btnMoreTech = document.querySelector("#btn-more-technics");
const btnTextTech = document.getElementById("swiper-showmore-tech");
const btnImgTech = document.getElementById("btn-img-tech");
// burger
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const closeIcon = document.querySelector('.navbar__content-header-close');
//more-text
const textMore = document.querySelector('.content__about-text');
const dots = document.querySelector('#dots');
const readMore = document.querySelector('.content__about-more');
//feedback
const feedback = document.querySelector(".feedback");
const feedbackClose = document.querySelector('.feedback__item-close');
const makeOrder = document.getElementsByClassName("prices-button");
if (document.body.clientWidth < 768) {
    let mySwiper_test = new Swiper('.swiper-container-logo', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination'
        }
    });
    let test = new Swiper('.swiper-container-technics',{
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination'
        }
    });
    let prices = new Swiper('.swiper-container-prices',{
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination'
        }
    });
}

btnMoreLogos.addEventListener('click', function () {
    for (let i = 0; i < slide.length; i++){
        if(slide[i].classList.contains('slide-open')){
            slide[i].classList.remove('slide-open');
            btnText.textContent = "Показать все";
            btnImg.style.transform = "rotate(0deg)";
        }else{
            slide[i].classList.add('slide-open');
            btnText.textContent = "Скрыть";
            btnImg.style.transform = "rotate(180deg)";
        }
    }
});
btnMoreTech.addEventListener('click', function () {
    for (let i = 0; i < slide.length; i++){
        if(slideTech[i].classList.contains('slide-open')){
            slideTech[i].classList.remove('slide-open');
            btnTextTech.textContent = "Показать все";
            btnImgTech.style.transform = "rotate(0deg)";
        }else{
            slideTech[i].classList.add('slide-open');
            btnTextTech.textContent = "Скрыть";
            btnImgTech.style.transform = "rotate(180deg)";
        }
    }
});

burger.addEventListener('click', () => {
    navbar.classList.add('navbar--active');
    header.style.display = 'none';
    // content.classList.add('content--active');
    // header.classList.add('header--active');
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('navbar--active');
    header.style.display = 'flex';
    // content.classList.remove('content--active');
    // header.classList.remove('header--active');
});

readMore.addEventListener('click', () => {
    if(textMore.style.width !== 'auto'){
        textMore.style.width = 'auto';
        textMore.style.height = '400px';
        btnImgTech.style.transform = "rotate(180deg)";
        readMore.textContent = "Скрыть";
    }
    else{
        textMore.style.width = '490px';
        textMore.style.height = '160px';
        readMore.textContent = "Читать далее";
        btnImg.style.transform = "rotate(0deg)";
    }
});
for (let i = 0; i < makeOrder.length; i++) {
    makeOrder[i].addEventListener('click', () => {
        feedback.style.display = 'block';
    });
}

feedbackClose.addEventListener('click', () => {
    feedback.style.display = 'none';
});