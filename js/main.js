let myTxt = document.querySelector('.header__text');

window.onload = animateText(myTxt);

function animateText(textArea) {
    let text = textArea.innerHTML;
    let to = text.length,
        from = 0;

    animate({
        duration: 4000,
        timing: bounce,
        draw: function(progress) {
            let result = (to - from) * progress + from;
            textArea.innerHTML = text.substr(0, Math.ceil(result))
        }
    });
}


function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}



let progresses = document.querySelectorAll('.skills__line');
let progress = document.querySelector('.skills');

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
                if(parseInt(item.parentNode.previousElementSibling.querySelector('span').textContent) >= 70){
                    item.parentNode.previousElementSibling.querySelector('span').style.color = 'green';
                }
            })
        }, 500);
        window.removeEventListener('scroll', showProgress);
    }
}
window.addEventListener('scroll', showProgress);


$(function () {
    $('.slider__items').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: '.slider__btn',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


////
// function updateProgress(num1, num2){
//     var percent = Math.ceil( num1 / num2 * 100 ) + '%';
//     document.querySelector('.bar').style.width = percent;
//     console.log(percent);
// }
//
// // var headerHeight = document.querySelector('.header').getBoundingClientRect().height;
//
// window.addEventListener('scroll', function(){
//     var top = window.scrollY;
//     var height = document.querySelector('main').clientHeight;
//     updateProgress(top, height);
// });