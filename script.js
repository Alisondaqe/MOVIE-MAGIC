document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.getElementById('movie-container');
    const addMovieButton = document.getElementById('add-movie');
    const movieInput = document.getElementById('movie-input');

    // Función para agregar una película
    function addMovie() {
        const movieName = movieInput.value.trim();
        if (movieName) {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                ${movieName}
                <button class="delete-btn">Eliminar</button>
            `;
            movieContainer.appendChild(movieItem);
            movieInput.value = ''; // Limpiar el campo de entrada

            // Añadir evento para el botón de eliminar
            movieItem.querySelector('.delete-btn').addEventListener('click', () => {
                movieContainer.removeChild(movieItem);
            });
        }
    }

    // Event listener para el botón de agregar película
    addMovieButton.addEventListener('click', addMovie);

    // Permitir agregar con la tecla Enter
    movieInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addMovie();
        }
    });
});


