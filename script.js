mapboxgl.accessToken = 'pk.eyJ1IjoibG9vZGkxMyIsImEiOiJja2lrd2pwNGMwZHlzMnNtd3UwaTRxYnB2In0.tqXHDKRXbi0dh0tJP-KA9w';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { 
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    })

    const nav = new mapboxgl.NavigatoionControl();
    map.addControl(nav, "top-left");
}