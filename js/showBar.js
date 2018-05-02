//video
var videoImg = document.querySelector('.video__img');
var img = document.querySelector('.video__img img');
var videoMovie = document.querySelector('.video__movie');
var video = document.querySelector('.video__movie video');

video.style.height = getComputedStyle(img).height;

videoImg.addEventListener('click', function () {
    this.style.display = 'none';
    videoMovie.style.display = 'block';
    video.volume = 0.3;
    video.play();
});

videoMovie.addEventListener('click', function () {
    videoImg.style.display = 'block';
    video.pause();
    videoMovie.style.display = 'none';
});