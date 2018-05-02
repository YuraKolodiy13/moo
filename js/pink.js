/**
 * Created by TIR-2 on 20.04.2017.
 */
var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var crop = document.querySelector('.mobile-btn__crop');
var fill = document.querySelector('.mobile-btn__fill');
var contrast = document.querySelector('.mobile-btn__contrast');
var editor_block1 = document.getElementById('editors-block__№1');
var editor_block2 = document.getElementById('editors-block__№2');
var editor_block3 = document.getElementById('editors-block__№3');


mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if(mainNav.classList.contains('main-nav--closed')){
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
});

fill.addEventListener('click', function () {
    this.classList.add('mobile-btn__fill--active');
    crop.classList.remove('mobile-btn__crop--active');
    contrast.classList.remove('mobile-btn__contrast--active');
    editor_block2.style.display ='block';
    editor_block1.style.display = 'none';
    editor_block3.style.display ='none';
});

crop.addEventListener('click', function () {
    this.classList.add('mobile-btn__crop--active');
    fill.classList.remove('mobile-btn__fill--active');
    contrast.classList.remove('mobile-btn__contrast--active');
    editor_block1.style.display ='block';
    editor_block2.style.display = 'none';
    editor_block3.style.display ='none';
});

contrast.addEventListener('click', function () {
    this.classList.add('mobile-btn__contrast--active');
    fill.classList.remove('mobile-btn__fill--active');
    crop.classList.remove('mobile-btn__crop--active');
    editor_block3.style.display ='block';
    editor_block2.style.display = 'none';
    editor_block1.style.display ='none';
});


