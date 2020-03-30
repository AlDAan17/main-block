if (document.body.clientWidth < 768) {
    let mySwiper_test = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination'
        }
    });
    //В чем здесь ошибка?
    let test = new Swiper('.swiper-container-technics',{
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination'
        }
    });
}


// function readMore(){
//     let btn = document.getElementsByClassName("content__about__more");
//     let dots = document.getElementById("dots");
//     let dots = document.getElementById("dots");
// }

// const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.navbar');
// const navbarActive = document.querySelector('.navbar--active');
// const content = document.querySelector('.content');
// const header = document.querySelector('header');
// const closeIcon = document.querySelector('navbar__content-header-close');
//
// burger.addEventListener('click', () => {
//    navbar.classList.add('navbar--active');
//    content.classList.add('content--active');
//    header.classList.add('header--active');
// });
//
// closeIcon.forEach(function (e) {
//     e.onclick = test;
// });
// function test() {
//     console.log(111);
// }

// if(navbar.classList.contains('navbar--active')) {

    // closeIcon.addEventListener('click', () => {
    //     navbar.classList.remove('navbar--active');
    //     // content.classList.remove('content--active');
    //     // header.classList.remove('header--active');
    // });

// }