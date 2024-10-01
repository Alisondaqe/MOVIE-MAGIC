
//el nombre de los paises y la informacion de los paises 
const moviesData = {
    "USA": ["'[RAPIDOS & FURIOSOS 🏎️🏁]'", "'[LA CAIDA DE LA CASA BLANCA🏛️ ]'", "'[CREED 2👍🏻]'","'[EL PLANETA DE LOS SIMIOS🙊]'"],
    "France": ["'[EN LAS PROFUNDIDADES DEL SENA🐋]'"],
    "Colombia": ["'[SIN SENOS SI HAY PARAISO🔫]'" ] ,
    "Canada": ["'[SHADOWHUNTERS🧔🏻]'", "'[LOS 100🧨]'"],
    "New Zealand": ["'[SWEET TOOTH🎞️]'"],
    "South Korea": ["'[VICENSO🤵🏻‍♂️]'"]
};

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//  LAS Coordenadas aproximadas de todos los paises
const countryCoords = {
    "USA": [37.1, -95.7],
    "France": [46.6, 1.9],
    "Colombia": [4.0, -74.0],
    "Canada": [56.1, -106.3],
    "New Zealand": [-40.9, 174.9],
    "South Korea": [35.9, 127.8]
};


// Asignar colores a los países
const countryColors = {
    "USA": "rosa",//°
    "France": "blanco",
    "Colombia": "celeste",
    "Canada": "negro",
    "New Zealand": "naranja",
    "South Korea":"azul"
};

for (const country in countryCoords) {
    L.marker(countryCoords[country]).addTo(map)
        .on('click', () => showMovies(country));
};


function showMovies(country) {
    const movies = moviesData[country] || [];
    const movieList = movies.length > 0 ? movies.join(", ") : "No hay películas disponibles.";
    const popupColorClass = `popup-${countryColors[country]}`;
    const popupContent = `<div class="${popupColorClass}"><strong>${country}</strong><br>${movieList}</div>`;
    
    L.popup()
        .setLatLng(countryCoords[country])
        .setContent(popupContent)
        .openOn(map);
};