document.addEventListener('DOMContentLoaded', function() {
    // Definir todas las secciones correctamente usando los IDs
    const secciones = {
        'inicio': document.getElementById('inicio'),
        'staff': document.getElementById('staff'),
        'productos': document.getElementById('productos'),
        'servicios': document.getElementById('servicios')
    };

    // Referencias a los botones
    const botones = document.querySelectorAll('.btnCrud');

    // Ocultar todas las secciones y mostrar la de inicio por defecto
    ocultarTodasLasSecciones();
    secciones.inicio.style.display = 'grid';

    // Agregar eventos a los botones
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombreSeccion = this.textContent.toLowerCase().trim(); // Convertir el texto del botón en clave válida
            
            console.log("Sección seleccionada:", nombreSeccion); // Para depuración

            // Desactivar todos los botones primero
            botones.forEach(btn => btn.classList.remove('active'));

            // Activar el botón actual
            this.classList.add('active');

            // Ocultar todas las secciones
            ocultarTodasLasSecciones();

            // Mostrar la sección correspondiente
            if (secciones[nombreSeccion]) {
                secciones[nombreSeccion].style.display = 'grid';
            }
        });
    });

    function ocultarTodasLasSecciones() {
        Object.values(secciones).forEach(seccion => {
            if (seccion) seccion.style.display = 'none';
        });
    }



    // logica para la secion de inicio
    const botonEditarPortada = document.querySelector(".editar-portada");
    const botonEditarPerfil = document.querySelector(".editar-perfil-establecimiento");

    // Evento para cambiar la imagen de portada
    botonEditarPortada.addEventListener("click", () => {
        cambiarImagen(".imagen-portada");
    });

    // Evento para cambiar la imagen de perfil
    botonEditarPerfil.addEventListener("click", () => {
        cambiarImagen(".foto-imagen-perfil");
    });

    /**
     * Función para cambiar la imagen seleccionada
     * @param {string} selector - Selector de la imagen a modificar
     */
    function cambiarImagen(selector) {
        const inputArchivo = document.createElement("input");
        inputArchivo.type = "file";
        inputArchivo.accept = "image/*";

        inputArchivo.addEventListener("change", (evento) => {
            const archivo = evento.target.files[0];

            if (archivo) {
                const lectorArchivos = new FileReader();
                lectorArchivos.onload = (evento) => {
                    document.querySelector(selector).src = evento.target.result;
                };
                lectorArchivos.readAsDataURL(archivo);
            }
        });

        inputArchivo.click();
    }
});
