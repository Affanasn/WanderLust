const lng = coordinates[0];
const lat = coordinates[1];

const map = L.map("map").setView([lat, lng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const customIcon = L.icon({
    iconUrl: "/images/marker.png",
    iconSize: [40, 40],      // Width, Height
    iconAnchor: [20, 40],    // Bottom center of icon
    popupAnchor: [0, -40]
});

L.marker([lat, lng], {
    icon: customIcon
}).addTo(map)
.bindPopup(`<b>${locationName}</b><br>Exact location`)
.openPopup();