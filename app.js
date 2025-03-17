document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const elementosCarrusel = document.querySelectorAll(".elementoCarrusel");
    const botonAnterior = document.querySelector(".botonAnterior");
    const botonSiguiente = document.querySelector(".botonSiguiente");

    // Variables de control
    let indiceActual = 1; // Comenzamos con el segundo elemento activo (índice 1)
    const totalElementos = elementosCarrusel.length;

    // Función para inicializar el carrusel
    function inicializarCarrusel() {
        // Forzar un recálculo de los estilos después de que las media queries se apliquen
        const anchoElemento = elementosCarrusel[0].offsetWidth;
        const margenElemento = parseInt(
            window.getComputedStyle(elementosCarrusel[0]).marginRight
        );

        // Calcular el ancho total del carrusel
        const anchoTotal = (anchoElemento + margenElemento) * totalElementos;

        // Establecer el ancho del carrusel
        carrusel.style.width = `${anchoTotal}px`;

        // Posicionar inicialmente para mostrar el elemento activo en el centro
        actualizarCarrusel(false);
    }

    // Función para actualizar la posición del carrusel
    function actualizarCarrusel(conTransicion = true) {
        // Desactivar transiciones si no se requieren
        if (!conTransicion) {
            carrusel.style.transition = "none";
        } else {
            carrusel.style.transition = "transform 0.5s ease-in-out";
        }

        // Forzar un recálculo de los estilos después de que las media queries se apliquen
        const anchoElemento = elementosCarrusel[0].offsetWidth;
        const margenElemento = parseInt(
            window.getComputedStyle(elementosCarrusel[0]).marginRight
        );

        // Calcular el desplazamiento para centrar el elemento activo
        const desplazamiento =
            -indiceActual * (anchoElemento + margenElemento) +
            (window.innerWidth / 2 - anchoElemento / 2);

        // Aplicar el desplazamiento
        carrusel.style.transform = `translateX(${desplazamiento}px)`;

        // Actualizar clases activas
        elementosCarrusel.forEach((elemento, indice) => {
            if (indice === indiceActual) {
                elemento.classList.add("activo");
            } else {
                elemento.classList.remove("activo");
            }
        });

        // Restaurar la transición después de un pequeño retraso si se desactivó
        if (!conTransicion) {
            setTimeout(() => {
                carrusel.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        }
    }

    // Función para ir al elemento anterior
    function irAlAnterior() {
        if (indiceActual > 0) {
            indiceActual--;
        } else {
            indiceActual = totalElementos - 1; // Volver al final cuando llegue al inicio
        }
        actualizarCarrusel();
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
    botonAnterior.addEventListener("click", () => {
        irAlAnterior();
        resetearAutoPlay();
    });

    botonSiguiente.addEventListener("click", () => {
        irAlSiguiente();
        resetearAutoPlay();
    });

    // Inicializar el carrusel al cargar la página
    inicializarCarrusel();

    // Manejar el redimensionamiento de la ventana
    let resizeTimer;
    window.addEventListener("resize", () => {
        // Usar debounce para evitar recalcular demasiadas veces durante el resize
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Forzar un recálculo de los estilos después de que las media queries se apliquen
            inicializarCarrusel();
        }, 250); // Esperar 250ms después de que termine el resize
    });

    // Manejar cambios de orientación en dispositivos móviles
    window.addEventListener("orientationchange", () => {
        setTimeout(inicializarCarrusel, 100);
    });

    // Auto-movimiento cada 3 segundos
    let autoPlay = setInterval(irAlSiguiente, 3000);

    function resetearAutoPlay() {
        clearInterval(autoPlay);
        autoPlay = setInterval(irAlSiguiente, 3000);
    }

    // Reiniciar auto-movimiento si el usuario interactúa con el carrusel
    carrusel.addEventListener("touchstart", resetearAutoPlay);

    // Permitir hacer clic en un elemento para activarlo
    elementosCarrusel.forEach((elemento, indice) => {
        elemento.addEventListener("click", () => {
            if (indice !== indiceActual) {
                indiceActual = indice;
                actualizarCarrusel();
                resetearAutoPlay();
            }
        });
    });

    // javascript para el funcionamiento de la barra de busqueda
    const btnBuscar = document.getElementById("btnBuscar");
    const opcionesBusqueda = document.getElementById("opcionesBusqueda");
    const btnCategorias = document.getElementById("btnCategorias");
    const submenuCategorias = document.getElementById("submenuCategorias");

    // 💡 Click en la lupa para mostrar/ocultar opciones de búsqueda
    btnBuscar.addEventListener("click", function () {
        opcionesBusqueda.style.display =
            opcionesBusqueda.style.display === "block" ? "none" : "block";
    });

    // 💡 Click en "Categorías" para mostrar/ocultar el submenú
    btnCategorias.addEventListener("click", function () {
        submenuCategorias.classList.toggle("activo");
    });

    // 💡 Ocultar menú si se hace click fuera de él
    document.addEventListener("click", function (event) {
        if (
            !btnBuscar.contains(event.target) &&
            !opcionesBusqueda.contains(event.target)
        ) {
            opcionesBusqueda.style.display = "none";
        }

        if (
            !btnCategorias.contains(event.target) &&
            !submenuCategorias.contains(event.target)
        ) {
            submenuCategorias.classList.remove("activo");
        }
    });

    // javascript para el desplazamiento de los tops
    document.querySelectorAll(".top").forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID destino sin #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Calcula la posición
                    behavior: "smooth", // Aplica el efecto suave
                });
            }
        });
    });

    // Logica para opciones del usuario
    const imagenPerfil = document.getElementById("imagenPerfil");
    const menuDesplegable = document.getElementById("menuDesplegable");

    imagenPerfil.addEventListener("click", function (event) {
        // Alternar la visibilidad del menú
        if (menuDesplegable.style.display === "block") {
            menuDesplegable.style.display = "none";
        } else {
            menuDesplegable.style.display = "block";
        }
        // Evitar que el clic se propague al documento y cierre el menú de inmediato
        event.stopPropagation();
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (
            !menuDesplegable.contains(event.target) &&
            event.target !== imagenPerfil
        ) {
            menuDesplegable.style.display = "none";
        }
    });
});
