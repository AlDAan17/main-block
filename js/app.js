// slide logo
const btnText = document.getElementById("swiper-showmore");
const btnImgLogos = document.getElementById("btn-img-logos");
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
const navbarContent = document.querySelector('.navbar__content');
const closeIcon = document.querySelector('.navbar__content-header-close');
const content = document.querySelector('.content');
const headerActive = document.querySelector('.header__active');
const readMoreText = document.querySelector('#readMoreText');
//readMore
const textMore = document.querySelector('.content__about-text');
const dots = document.querySelector('#dots');
const readMoreImg = document.querySelector('#readMoreImg');
const readMore = document.querySelector('.content__about-more');
const readImg = document.querySelector('.content__about-img');
//feedback
const feedback = document.querySelector(".feedback");
const feedbackItem = document.querySelector(".feedback__item");
const feedbackClose = document.querySelector('.feedback__item-close');
const linkSettings = document.querySelectorAll('.link__settings');
const makeOrder = document.getElementsByClassName("prices-button");
const descriptionLink = document.querySelector("descriptionLink");
//orderCall
const linkSearch = document.querySelector('.link__search');
const orderCall = document.querySelector(".orderCall");
const orderCallItem = document.querySelector(".orderCall__item");
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
            btnImgLogos.style.transform = "rotate(0deg)";
        }else{
            slide[i].classList.add('slide-open');
            btnText.textContent = "Скрыть";
            btnImgLogos.style.transform = "rotate(180deg)";
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
    navbarContent.classList.add('Animation__open');
    navbarContent.classList.remove('AnimationNavClose');
    content.style.position = 'fixed';
});

closeIcon.addEventListener('click', () => {
    navbarContent.classList.add('AnimationNavClose');

    setTimeout(function(){
        navbar.classList.remove('navbar--active');
        header.classList.remove('header__active');
        navbarContent.classList.remove('Animation__open');
        content.style.position = 'unset';
    }, 200);
});
// readmore
readMore.addEventListener('click', () => {
    if(textMore.style.width !== 'auto'){
        textMore.style.width = 'auto';
        textMore.style.height = 'auto';
        readMoreImg.style.transform = "rotate(180deg)";
        readMoreText.textContent = "Скрыть";
        readImg.style.height = 'fit-content';
        dots.style.display = 'none';
    }
    else{
        textMore.style.width = '85%';
        textMore.style.height = '160px';
        readMoreText.textContent = "Читать далее";
        readMoreImg.style.transform = "rotate(0deg)";
        readImg.style.height = 'unset';
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
    feedbackItem.classList.add('AnimationModal__close');

    setTimeout(function(){
        feedback.style.display = 'none';
        content.style.position = 'unset';
        feedbackItem.classList.remove('AnimationModal__close');
    }, 200);
});
for(let i = 0; i < linkSettings.length; i++) {
    linkSettings[i].addEventListener('click', () => {
        feedback.style.display = 'block';
        content.style.position = 'fixed';
    });
}
//close modal window clicked on the outside
window.onclick = function (e) {
    if(e.target === feedback){
        feedbackItem.classList.add('AnimationModal__close');

        setTimeout(function(){
            feedback.style.display = 'none';
            content.style.position = 'unset';
            feedbackItem.classList.remove('AnimationModal__close');
        }, 200);
    }
    if(e.target === navbar){
        navbarContent.classList.add('AnimationNavClose');

        setTimeout(function(){
            navbar.classList.remove('navbar--active');
            header.classList.remove('header__active');
            navbarContent.classList.remove('Animation__open');
            content.style.position = 'unset';
        }, 200);
    }
    if(e.target === orderCall){
        orderCallItem.classList.add('AnimationModal__close');

        setTimeout(function(){
            orderCall.style.display = 'none';
            content.style.position = 'unset';
            orderCallItem.classList.remove('AnimationModal__close');
        }, 200);
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


    orderCallItem.classList.add('AnimationModal__close');

    setTimeout(function(){
        orderCall.style.display = 'none';
        content.style.position = 'unset';
        orderCallItem.classList.remove('AnimationModal__close');
    }, 200);
});

linkCall.addEventListener('click', () => {
    orderCall.style.display = 'block';
    content.style.position = 'fixed';
    navbar.classList.remove('navbar--active');
    header.classList.remove('header__active');
});
