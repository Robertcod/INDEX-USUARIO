
document.addEventListener("DOMContentLoaded", function() {
    const btnBuscar = document.getElementById("btnBuscar");
    const opcionesBusqueda = document.getElementById("opcionesBusqueda");
    const btnCategorias = document.getElementById("btnCategorias");
    const submenuCategorias = document.getElementById("submenuCategorias");

    // 💡 Mostrar/ocultar opciones de búsqueda
    btnBuscar.addEventListener("click", function() {
        opcionesBusqueda.style.display =
            opcionesBusqueda.style.display === "grid" ? "none" : "grid";
    });

    // 💡 Mostrar menú de categorías al hacer clic en el botón
    btnCategorias.addEventListener("click", function() {
        submenuCategorias.classList.toggle("activo");
    });

    // 💡 Mantener abierto el submenú al pasar el mouse
    btnCategorias.addEventListener("mouseenter", function() {
        submenuCategorias.style.display = "grid";
    });

    submenuCategorias.addEventListener("mouseenter", function() {
        submenuCategorias.style.display = "grid";
    });

    // 💡 Ocultar el submenú solo cuando el mouse salga completamente
    submenuCategorias.addEventListener("mouseleave", function() {
        submenuCategorias.style.display = "none";
    });

    btnCategorias.addEventListener("mouseleave", function() {
        setTimeout(() => {
            if (!submenuCategorias.matches(":hover")) {
                submenuCategorias.style.display = "none";
            }
        }, 200); // Pequeña espera para evitar cierres abruptos
    });

    // 💡 Ocultar menús al hacer clic fuera de ellos
    document.addEventListener("click", function(event) {
        if (!btnBuscar.contains(event.target) && !opcionesBusqueda.contains(event.target)) {
            opcionesBusqueda.style.display = "none";
        }

        if (!btnCategorias.contains(event.target) && !submenuCategorias.contains(event.target)) {
            submenuCategorias.style.display = "none";
        }
    });
});