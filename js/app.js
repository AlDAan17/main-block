const btnText = document.getElementById("swiper-showmore");
const btnImg = document.querySelector(".swiper-more-button");
const btnMoreLogos = document.querySelector("#btn-more-logos");
const slide = document.getElementsByClassName("logos");

const slideTech = document.getElementsByClassName("slide-technics");
const btnMoreTech = document.querySelector("#btn-more-technics");
const btnTextTech = document.getElementById("swiper-showmore-tech");
const btnImgTech = document.getElementById("btn-img-tech");

if (document.body.clientWidth < 768) {
    let mySwiper_test = new Swiper('.swiper-container', {
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