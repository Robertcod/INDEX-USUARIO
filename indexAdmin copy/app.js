document.addEventListener('DOMContentLoaded', function () {
    // Definir todas las secciones correctamente usando los IDs
    const secciones = {
        'inicio': document.getElementById('inicio'),
        'staff': document.getElementById('staff'),
        'productos': document.getElementById('productos'),
        'servicios': document.getElementById('servicios'),
        'notificacion': document.getElementById('notificacion') // Asegúrate de corregir el ID en HTML
    };

    document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("mostrar");
    }); 
    
    // Referencias a los botones de navegación
    const botones = document.querySelectorAll('.boton-seccion');

    // Ocultar todas las secciones y mostrar la de inicio por defecto
    ocultarTodasLasSecciones();
    secciones.inicio.style.display = 'flex';
    botones[0].classList.add('active');

    // Agregar eventos a los botones de navegación
    botones.forEach(boton => {
        boton.addEventListener('click', function () {
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
                secciones[nombreSeccion].style.display = 'flex';
            }
        });
    });

    function ocultarTodasLasSecciones() {
        Object.values(secciones).forEach(seccion => {
            if (seccion) seccion.style.display = 'none';
        });
    }

    // **Lógica para abrir la sección de notificación**
    const elementosBandeja = document.querySelectorAll(".elemento-bandeja");
    const contenedorNotificacion = document.getElementById("notificacion");
    const bandejaEntrada = document.querySelector(".contenedor-bandeja");

    elementosBandeja.forEach(elemento => {
        elemento.addEventListener("click", () => {
            ocultarTodasLasSecciones();
            contenedorNotificacion.style.display = "grid"; // Muestra la notificación
        });
    });

    // **Lógica para cambiar imágenes (manteniendo tu código original)**
    const botonEditarPortada = document.querySelector(".editar-portada");
    const botonEditarPerfil = document.querySelector(".editar-perfil-establecimiento");

    botonEditarPortada.addEventListener("click", () => {
        cambiarImagen(".imagen-portada");
    });

    botonEditarPerfil.addEventListener("click", () => {
        cambiarImagen(".foto-imagen-perfil");
    });

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
