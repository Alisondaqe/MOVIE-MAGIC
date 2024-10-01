//el nombre de los paises y la informacion de los paises

const moviesData = {
    "USA": ["'[LA LA LAND ❤️]'", "'[COMO SI FUERA LA PRIMERA VEZ ❤️‍🩹 ]'", "'[EL ESTAND DE LOS BESOS💋]'"],
    "England": ["'[YO ANTES DE TI 💘]'"],
    "Mexico": ["'[EL TITANIC💗]'"],
    "South Korea": ["'[KING THE LAND 💓]'", "'[TRUE BEAUTY💕]' ", "'[GLOBIN💞]' ","'[LA REINA DE LAS LAGRIMAS🩷]'","'[WOO UNA ABOGADO EXTRAORDINARIO ❤️‍🔥]'"]
};

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//  LAS Coordenadas aproximadas de todos los paises
const countryCoords = {
    "USA": [37.1, -95.7],
    "England": [55.0, -2.0],
    "Mexico": [23.6, -102.5], 
    "South Korea": [35.9, 127.8]
};

// Asignar colores a los países
const countryColors = {
    "USA": "rosa",
    "England": "blanco",
    "Mexico": "celeste",
    "South Korea": "negro"
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


