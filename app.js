document.addEventListener('DOMContentLoaded', function () {
    // Elementos del DOM
    const carrusel = document.querySelector('.carrusel');
    const elementosCarrusel = document.querySelectorAll('.elementoCarrusel');
    const botonAnterior = document.querySelector('.botonAnterior');
    const botonSiguiente = document.querySelector('.botonSiguiente');

    // Variables de control
    let indiceActual = 1; // Comenzamos con el segundo elemento activo (índice 1)
    const totalElementos = elementosCarrusel.length;



    // Configurar posición inicial
    function inicializarCarrusel() {
        // Calcular el ancho total del carrusel
        const anchoElemento = elementosCarrusel[0].offsetWidth;
        const margenElemento = parseInt(window.getComputedStyle(elementosCarrusel[0]).marginRight);
        const anchoTotal = (anchoElemento + margenElemento * 2) * totalElementos;

        // Establecer el ancho del carrusel
        carrusel.style.width = `${anchoTotal}px`;

        // Posicionar inicialmente para mostrar el elemento activo en el centro
        actualizarCarrusel(false);
    }

    // Función para actualizar la posición del carrusel
    function actualizarCarrusel(conTransicion = true) {
        if (!conTransicion) {
            carrusel.style.transition = 'none';
        } else {
            carrusel.style.transition = 'transform 0.5s ease-in-out';
        }

        // Calcular el desplazamiento para centrar el elemento activo
        const anchoElemento = elementosCarrusel[0].offsetWidth;
        const margenElemento = parseInt(window.getComputedStyle(elementosCarrusel[0]).marginRight);
        const anchoTotal = anchoElemento + margenElemento * 2;

        // Calcular el desplazamiento para centrar el elemento activo
        const desplazamiento = -indiceActual * anchoTotal + (window.innerWidth / 2 - anchoElemento / 2 - margenElemento);

        // Aplicar el desplazamiento
        carrusel.style.transform = `translateX(${desplazamiento}px)`;

        // Actualizar clases activas
        elementosCarrusel.forEach((elemento, indice) => {
            if (indice === indiceActual) {
                elemento.classList.add('activo');
            } else {
                elemento.classList.remove('activo');
            }
        });

        // Restaurar la transición después de un pequeño retraso si se desactivó
        if (!conTransicion) {
            setTimeout(() => {
                carrusel.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    }

    // Función para ir al elemento anterior
    function irAlAnterior() {
        if (indiceActual > 0) {
            indiceActual--;
            actualizarCarrusel();
        }
    }

    // Función para ir al elemento siguiente
    function irAlSiguiente() {
        if (indiceActual < totalElementos - 1) {
            indiceActual++;
        } else {
            indiceActual = 0; // Volver al inicio cuando llegue al final
        }
        actualizarCarrusel();
    }
    // Eventos de click para los botones de navegación
    botonAnterior.addEventListener('click', () => {
        irAlAnterior();
        resetearAutoPlay();
    });
    botonSiguiente.addEventListener('click', () => {
        irAlSiguiente();
        resetearAutoPlay();
    });

    // Inicializar el carrusel
    inicializarCarrusel();

    // Ajustar el carrusel cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        inicializarCarrusel();
    });

    // Auto-movimiento cada 3 segundos
    let autoPlay = setInterval(irAlSiguiente, 3000);

function resetearAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(irAlSiguiente, 3000);
}

    // También reiniciar auto-movimiento si el usuario desliza en el carrusel
    carrusel.addEventListener('touchstart', resetearAutoPlay);

    // Soporte para gestos táctiles (swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    carrusel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carrusel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        manejarGestoTactil();
    });

    function manejarGestoTactil() {
        const umbralSwipe = 50; // Mínima distancia para considerar un swipe

        if (touchEndX < touchStartX - umbralSwipe) {
            // Swipe hacia la izquierda - siguiente
            irAlSiguiente();
        }

        if (touchEndX > touchStartX + umbralSwipe) {
            // Swipe hacia la derecha - anterior
            irAlAnterior();
        }
    }

    // Permitir hacer clic en un elemento para activarlo
    elementosCarrusel.forEach((elemento, indice) => {
        elemento.addEventListener('click', () => {
            if (indice !== indiceActual) {
                indiceActual = indice;
                actualizarCarrusel();
            }
        });
    });














    





const btnBuscar = document.getElementById("btnBuscar");
const opcionesBusqueda = document.getElementById("opcionesBusqueda");
const btnCategorias = document.getElementById("btnCategorias");
const submenuCategorias = document.getElementById("submenuCategorias");

// 💡 Click en la lupa para mostrar/ocultar opciones de búsqueda
btnBuscar.addEventListener("click", function () {
    opcionesBusqueda.style.display = opcionesBusqueda.style.display === "block" ? "none" : "block";
});

// 💡 Click en "Categorías" para mostrar/ocultar el submenú
btnCategorias.addEventListener("click", function () {
    submenuCategorias.classList.toggle("activo");
});

// 💡 Ocultar menú si se hace click fuera de él
document.addEventListener("click", function (event) {
    if (!btnBuscar.contains(event.target) && !opcionesBusqueda.contains(event.target)) {
        opcionesBusqueda.style.display = "none";
    }

    if (!btnCategorias.contains(event.target) && !submenuCategorias.contains(event.target)) {
        submenuCategorias.classList.remove("activo");
    }
});
});

