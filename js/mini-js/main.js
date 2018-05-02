const progresses = document.querySelectorAll('.skills__line');
const progress = document.querySelector('.about__skills');

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
window.addEventListener('scroll', showProgress);


$(function () {
    $('.tabs a').click(function () {
        $(this).parents('.tab__wrapper').find('.tabCont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });

    $('.sliderTop__items').slick({
        arrows: false,
        dots: true
    });

    $('.sliderBottom__items').slick({
        dots: true,
        vertical: true,
        appendArrows: '.sliderBottom__btn',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $navTabList = $('.navTabList');
    $navTabList.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parents('.tab__wrapper').find('.tabCont').addClass('hide');
        $(this).find('.slick-current').siblings().removeClass('active');
        var id = $(this).find('.slick-current a').attr('href');
        $(id).removeClass('hide');
        $(this).parent().find('.slick-current').addClass('active');
        return false;
    });

    $(window).on('resize load', function () {
        if($(window).width() > 767){
            if($navTabList.hasClass('slick-initialized')){
                $navTabList.slick('unslick');
            }
            return;
        }
        if(!$navTabList.hasClass('slick-initialized')){
            $navTabList.slick({
                slidesToShow: 1
            });
        }
    });

});

//map
function initMap() {
    let coordinates = {lat: 51.473987, lng: -0.061018},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15,
            scrollwheel: false
        });

        let image = 'img/mini-img/marker.png',

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP
        });

    $.getJSON("js/mini-js/map.json", function(data) {
        map.setOptions({styles: data});
    });
    //
    // let popupContent = '<p class="content">Что угодно</p>';
    // let infowindow = new google.maps.InfoWindow({
    //     content: popupContent
    // });
    //
    // infowindow.open(map, marker);
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });
    //
}

const burger = document.querySelector('.navMain__btn');
const navList = document.querySelector('.navMain ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});

//scroll
$(document).ready(function(){
    $(".navMain").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



