const overlay = document.getElementById('overlay');
const imagenInformativa = document.getElementById('imagen-informativa');
const tituloInformativo = document.getElementById('titulo-informativo');
const textoInformativo = document.getElementById('texto-informativo');
const cerrar = document.getElementById('cerrar');

document.querySelectorAll('.imagen-circular').forEach(imagen => {
    imagen.addEventListener('click', function() {
        const info = this.getAttribute('data-info');

        const imgSrc = this.getAttribute('data-img');
        
        tituloInformativo.textContent = info;
        imagenInformativa.src = imgSrc;
        overlay.style.display = 'flex';
    });
});

cerrar.addEventListener('click', function() {
    overlay.style.display = 'none';
});

function goblinApi() {
    $.ajax({
      type: "GET",
      url: "../ejemplo.json", // Cambia esto por la URL correcta de tu API
      dataType: "json",
      success: function (data) {
        console.log(data);
        const personajes = data.seriesInfo.Lalaland; // Accede a los personajes de la pelicula Lalaland
        let content = '';
  
        personajes.forEach(personaje => {
          content += `
            <div class="gol">
                <img src="${personaje.imagen}" alt="${personaje.Nombre}" width="120px"/>
                <p>Nombre: ${personaje.Nombre}</p>
                <p>Fecha de nacimiento: ${personaje.Fechadenacimiento}</p>
                <p>Edad: ${personaje.Edad}</p>
                <p>Personaje: ${personaje.Personaje}</p>
            </div>
          `;
        });
  
        $("#prueba").html(content);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error en la petición AJAX:", textStatus, errorThrown);
        $("#prueba").html("<p>Error al cargar los datos.</p>");
      },
    });
  }
  goblinApi();
  
