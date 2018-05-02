/**
 * Created by TIR-2 on 15.04.2017.
 */
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if(navMain.classList.contains('main-nav--closed')){
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});


var Link = document.querySelector('.main-nav__user-login');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content__btn--close');

Link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal-content--show');
    if(navMain.classList.contains('main-nav--closed')){
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content--show');
});