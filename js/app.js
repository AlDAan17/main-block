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
const navbarActive = document.querySelector('.navbar--active');
const header = document.querySelector('header');
const closeIcon = document.querySelector('.navbar__content-header-close');
const content = document.querySelector('.content');
const headerActive = document.querySelector('.header__active');
//more-text
const textMore = document.querySelector('.content__about-text');
const dots = document.querySelector('#dots');
const readMore = document.querySelector('.content__about-more');
const readImg = document.querySelector('.content__about-img');
//feedback
const feedback = document.querySelector(".feedback");
const feedbackClose = document.querySelector('.feedback__item-close');
const linkSettings = document.querySelector('.link__settings');
const makeOrder = document.getElementsByClassName("prices-button");
//orderCall
const linkSearch = document.querySelector('.link__search');
const orderCall = document.querySelector(".orderCall");
const orderCallClose = document.querySelector('.orderCall__item-close');
const navbarCall = document.querySelector('.navbar__content-icons-call');
const linkCall = document.querySelector('.link__call');
// swiper
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
//show all
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
// burger
burger.addEventListener('click', () => {
    navbar.classList.add('navbar--active');
    header.classList.add('header__active');
    content.style.position = 'fixed';
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('navbar--active');
    header.classList.remove('header__active');
    content.style.position = 'unset';
});
// readmore
readMore.addEventListener('click', () => {
    if(textMore.style.width !== 'auto'){
        textMore.style.width = 'auto';
        textMore.style.height = 'auto';
        btnImg.style.transform = "rotate(180deg)";
        readMore.textContent = "Скрыть";
        readImg.style.height = '300px';
        dots.style.display = 'none';
    }
    else{
        textMore.style.width = 'inherit';
        textMore.style.height = '160px';
        readMore.textContent = "Читать далее";
        btnImg.style.transform = "rotate(0deg)";
        readImg.style.height = 'auto';
        dots.style.display = 'inline-block';
    }
});
//feedback
for (let i = 0; i < makeOrder.length; i++) {
    makeOrder[i].addEventListener('click', () => {
        feedback.style.display = 'block';
        content.style.position = 'fixed';
    });
}
feedbackClose.addEventListener('click', () => {
    feedback.style.display = 'none';
    content.style.position = 'unset';
});
linkSettings.addEventListener('click', () => {
    feedback.style.display = 'block';
    content.style.position = 'fixed';
});

window.onclick = function (e) {
    if(e.target === feedback){
        feedback.style.display = "none";
        content.style.position = "unset";
    }
    if(e.target === navbar){
        navbar.classList.remove('navbar--active');
        header.classList.remove('header__active');
        content.style.position = "unset";
    }
    if(e.target === orderCall){
        orderCall.style.display = 'none';
        content.style.position = 'unset';
    }
};
//orderCall
navbarCall.addEventListener('click', () =>{
    orderCall.style.display = 'block';
    content.style.position = 'fixed';
    navbar.classList.remove('navbar--active');
    header.classList.remove('header__active');
});
orderCallClose.addEventListener('click', () =>{
    orderCall.style.display = 'none';
    content.style.position = 'unset';
});
linkCall.addEventListener('click', () =>{
    orderCall.style.display = 'block';
    content.style.position = 'fixed';
    navbar.classList.remove('navbar--active');
    header.classList.remove('header__active');
});
