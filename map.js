// Basic map implementation using Google Maps (replace YOUR_API_KEY)
function initMap() {
    const locations = [
        {lat: 48.1351, lng: 11.5820, title: 'Munich'},
        {lat: 48.8566, lng: 2.3522, title: 'Paris'},
        // Add more cities with their coordinates
    ];

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: locations[0]
    });

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title
        });
    });
}
