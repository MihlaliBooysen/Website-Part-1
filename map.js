// Initialize the map and set the view to a given location and zoom
const map = L.map('map').setView([-25.7479, 28.2293], 13); // Example: Pretoria, South Africa

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Example locations (could be events, products, or service centers)
const locations = [
    { name: "YMN Solutions", coords: [-25.7479, 28.2293] },
    { name: "YMN Head Office ", coords: [-25.7520, 28.2170] },
    { name: "Community Center", coords: [-25.7430, 28.2400] },
];

// Add markers dynamically
locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`)
        .openPopup();
});

// Optional: add a circle to highlight a region
L.circle([-25.7479, 28.2293], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.2,
    radius: 500, // in meters
}).addTo(map);

