const APIKEY = "at_cXd6xETxwI0ICbnqdn3Sv07CfbL08";
const ip = document.querySelector(".ip-number");
const btn = document.querySelector(".submit");

let showIP = document.querySelector("#id")
let showLocation = document.querySelector("#location");
let showTimezone = document.querySelector("#timezone");
let showISP = document.querySelector("#isp");

let map = L.map('map').setView([0, 0], 13)
document.getElementById("map").removeAttribute("tabIndex")


btn.addEventListener("click", getIp);
ip.addEventListener("keypress", (e) => e.key === "Enter" ? getIp() : null);

/* Get user IP address on page load */
window.onload = () => fetchIp();


function fetchIp() {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=".concat(APIKEY, "&ipAddress=").concat(ip.value))
        .then(res => res.json())
        .then(data => {

        showIP.innerText = data.ip;
        showISP.innerText = data.isp;
        showTimezone.innerText = "UTC ".concat(data.location.timezone);
        showLocation.innerText = `${data.location.region}, ${data.location.city}, ${data.location.country}, ${data.location.postalCode}`;

        /* Leaflet Map JS */

        map.setView([data.location.lat, data.location.lng], 13);
        let tileURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        let osm = L.tileLayer(tileURL, {
            maxZoom: 19,
            attribution: '© OpenStreetMap',
        });
        const icon = L.icon({
          iconUrl: "./images/icon-location.svg",
          iconSize: [46, 56], // size of the icon
        });
        osm.addTo(map);
        position = [data.location.lat, data.location.lng];
        L.marker(position, {icon: icon}, {draggable: true}).addTo(map);  
    });
}

function getIp(){

  fetch("https://geo.ipify.org/api/v2/country,city?apiKey=".concat(APIKEY, "&ipAddress=").concat(ip.value))
        .then(res => res.json())
        .then(data => {
        
        showIP.innerText = data.ip;
        showISP.innerText = data.isp;
        showTimezone.innerText = "UTC ".concat(data.location.timezone);
        showLocation.innerText = `${data.location.region}, ${data.location.city}, ${data.location.country}, ${data.location.postalCode}`;


        map.flyTo([data.location.lat, data.location.lng], 13)
        let tileURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        let osm = L.tileLayer(tileURL, {
            maxZoom: 19,
            attribution: '© OpenStreetMap',
            draggable: true
        });
        const icon = L.icon({
          iconUrl: "./images/icon-location.svg",
          iconSize: [46, 56], // size of the icon
        });
        osm.addTo(map);
        position = [data.location.lat, data.location.lng];
        L.marker(position, {icon: icon}).addTo(map);
  })

}