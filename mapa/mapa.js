//el nombre de los paises y la informacion de los paises

const moviesData = {
    "USA": ["'[DONDE ESTAN LAS RUBIAS🤣]'", "'[SON COMO NIÑOS😂]'", "'[SEXTILLIZOS😄 ]'","'[FRIEND😋]' ","'[SPACE FORCE😁]'", "'[THE OFFICE😀]'", "'[LAS MUJER DE LA CASA DE ENFRENTE DE LA CHICA EN LA VENTANA😆]' "],
    "England": ["'[DERRY GRILS😄]'"],
    "Argentina": ["'[ANIMAL😁]'"]
};

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//  LAS Coordenadas aproximadas de todos los paises
const countryCoords = {
    "USA": [37.1, -95.7],
    "England": [55.0, -2.0],
    "Argentina": [-38.4, -63.6]
};


// Asignar colores a los países
const countryColors = {
    "USA": "rosa",
    "England": "blanco",
    "Argentina": "negro"
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


