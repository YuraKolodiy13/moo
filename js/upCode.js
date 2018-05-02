//бургер меню
const icon = document.querySelector('.icon');
const nav = document.querySelector('.nav');

icon.addEventListener('click', function () {
    nav.classList.toggle('responsive');
});


//слайдер
let slideIndex = 1;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function () {
    plusSlides(-1)
});
next.addEventListener('click', function () {
    plusSlides(1)
});

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    if(n > slides.length){
        slideIndex = 1;
    }else if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

const slider = document.querySelector('.slider');
let sliderTimeOut = slider.dataset.autoplay || 3000;

setInterval(function () {
    plusSlides(1);
}, sliderTimeOut);



//плавна прокрутка
const linkNav = document.querySelectorAll('[href^="#nav"]');
let V = 1;  // швидкість

for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset;  // прокрутка
        let hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, до якого треба перейти
        let t = document.querySelector(hash).getBoundingClientRect().top; //відступ від вікна браузера до id
        let start = null;

        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start;
            let r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash;  // URL с хэшем
            }
        }
    }, false);
}
window.addEventListener('scroll', function() {
    const nav = document.querySelectorAll('section[id^="nav"]');
    for (let i = 0; i < nav.length; i++) {
        document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'red' : '');
    }
}, false);

window.addEventListener('scroll', function () {
    if(pageYOffset > 0){
        nav.style.boxShadow = '0 1px 5px 0 #ccc';
    }else {
        nav.style.boxShadow = '';
    }
});


//анімація, коли видимий прогресс
const progresses = document.querySelectorAll('.skills__line');
const progress = document.querySelector('.aboutUs__skills');
const contact = document.querySelector('.footer__top');
const about = document.querySelector('.nav a[href="#nav-aboutUs"]');
const contacts = document.querySelector('.nav a[href="#nav-contact"]');

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}
function showProgress() {
    if(isVisible(progress)){
        setTimeout(function () {
            [...progresses].map(function (item) {
                item.style.width = item.parentNode.previousElementSibling.querySelector('span').textContent;
            })
        }, 500);
        window.removeEventListener('scroll', showProgress);
    }
}
function highlightsAboutUs() {
    if(isVisible(progress)){
        about.style.fontWeight = 'bold';
    }else {
        about.style.fontWeight = 'normal';
    }
}
function highlightsContact() {
    if(isVisible(contact)){
        contacts.style.fontWeight = 'bold';
    }else {
        contacts.style.fontWeight = 'normal';
    }
}

window.addEventListener('scroll', highlightsAboutUs);
window.addEventListener('scroll', highlightsContact);
window.addEventListener('scroll', showProgress);
highlightsAboutUs();
highlightsContact();
showProgress();


//валідація форми
let name = document.querySelector('.footer__form input[name="name"]');
let email = document.querySelector('.footer__form input[name="email"]');
const submit = document.querySelector('.footer__form button[type="submit"]');
const form = document.querySelector('.footer__form');


form.addEventListener('submit', function(e) {
    if (name.value.length < 6 || email.value.length < 6) {
        e.preventDefault();
        form.classList.remove("enter-form-error");
        setTimeout(function() {
            form.classList.add("enter-form-error")
        }, 1);
    }
});

const search = document.querySelector('.search');
const inputSearch = document.querySelector('.nav input');

if(document.documentElement.clientWidth < 1200){
    search.addEventListener('click', function () {
        inputSearch.style.opacity = '1';
    })
}