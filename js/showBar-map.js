//map
var latlng = new google.maps.LatLng("49.8477176", "24.0280952");
var myOptions = {
    zoom: 17,
    center: latlng,
    navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("makemap_canvas"),myOptions);
map.scrollwheel=true;
map.setOptions({ mapTypeControl:true});

var locations = [
    {
        title: 'Show Bar',
        position: {lat: 49.847779, lng: 24.024533},
        icon: {
            url: window.devicePixelRatio > 1 ? "img/showBar-img/marker.png" : "img/showBar-img/marker.png",
            scaledSize: new google.maps.Size(60, 85)
        }

    }
];
locations.forEach( function( element ) {
    var marker = new google.maps.Marker({
        position: element.position,
        map: map,
        title: element.title,
        icon: element.icon
    });
});

var footer = document.querySelector('.footer__map');
var maps = document.querySelector('.map');

footer.addEventListener('mouseover', function () {
    maps.style.transform = 'translateY(0)';
});
footer.addEventListener('mouseout', function () {
    maps.style.transform = ''
});
