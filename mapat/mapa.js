//el nombre de los paises y la informacion de los paises
const moviesData = {
    "USA": ["'[CHUKI 3 🔪]'", "' [ANNABELLE 🪆]'" , "'[CONJURO2 👹]'"  , "'[OUIJA 😈]'","'[INSIDIOUS 😱]'", "'[ STRANGER THINGS ☠️]'"],
    "England": ["'[THE HAUNTING OF BLY MONAO 🎭]'"],
    "South Korea": ["'[ESTAMOS MUERTOS 🧟‍♂️]'"],
    "Canada": ["'[HAPPY TREE FRIEND 😨]'"],
    "Georgia": ["'[THE WALKING DEAD 🧟‍♀️]'"]
};

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//  LAS Coordenadas aproximadas de todos los paises
const countryCoords = {
    "USA": [37.1, -95.7],
    "England": [55.0, -2.0], 
    "South Korea": [35.9, 127.8],
    "Canada": [56.1, -106.3],
    "Georgia": [42.0, 43.5]
};

// Asignar colores a los países
const countryColors = {
    "USA": "rosa",
    "England": "blanco",
    "South Korea": "celeste",
    "Canada": "negro",
    "Georgia": "rosa"
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
