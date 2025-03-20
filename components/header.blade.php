<header>
    <div class="contenedor-logo">
        <h2 class="my-look">MYLOOK</h2>
    </div>
    <nav>
        <ul class="navegacion">
            <li class="contenedor-busqueda">
                <button class="boton-buscar" id="btnBuscar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <div class="opciones-busqueda" id="opcionesBusqueda">
                    <div class="contenedor-input-busqueda">
                        <input type="text" class="input-busqueda" placeholder="Buscar..." />
                        <button type="button" class="input-busqueda">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div class="contenedor-categorias">
                        <button class="boton-categorias" id="btnCategorias">
                            Categorías
                        </button>
                        <ul class="submenu-categorias" id="submenuCategorias">
                            <li><button class="categoria" data-categoria="Peluquería">Peluquería</button></li>
                            <li><button class="categoria" data-categoria="Uñas">Uñas</button></li>
                            <li><button class="categoria" data-categoria="Maquillaje">Maquillaje</button></li>
                            <li><button class="categoria" data-categoria="Barbería">Barbería</button></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li><a href="{{ url('/usuarios/index') }}"><i class="fa-solid fa-house-chimney"></i></a></li>
            <li class="tops"><a href="#top" class="top"><i class="fa-solid fa-trophy"></i></a></li>

            {{-- Verifica que la variable $tipo esté definida antes de usarla --}}
            @if (isset($tipo) && $tipo === 'admin')
                <li><a href="{{ url('/admin') }}"><i class="fa-solid fa-gear"></i> Administrar</a></li>
            @endif

            <li id="contenedor-perfil">
                <img id="imagenPerfil" class="imagen-perfil" 
                    src="https://img.freepik.com/foto-gratis/foto-chico-guapo-afeitar-mira-expresion-agradable-directamente-camara_176532-8164.jpg"
                    alt="Foto de perfil" />

                <ul id="menuDesplegable" class="menu-desplegable">
                    <li><a href="#">Ajustes</a></li>

                    @if (isset($tipo) && $tipo === 'admin')
                        <li><a href="#">Configuraciones Avanzadas</a></li>
                    @endif

                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        width: 100%;
        max-width: 100vw;

        background-color: var(--color-secondary);
        color: var(--color-primary);
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 1em;
        gap: 2em;
        z-index: 22;

        .contenedor-logo h2 {
            font-size: clamp(2em, 4vw, 4rem);
        }

        .navegacion {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 10px;

            .fa-magnifying-glass {
                color: var(--color-primary);
                font-size: 1.5em;
            }

            .fa-solid {
                font-size: 1.3em;

            }

            #contenedor-perfil {
                position: relative;
                display: inline-block;
                cursor: pointer;

                .menu-desplegable {
                    display: none;
                    position: absolute;
                    top: 60px;
                    right: 0;
                    background: var(--color-secondary);
                    box-shadow: 0 .2em .4em var(--color-primary);
                    border-radius: .3em;
                    overflow: hidden;
                    min-width: 15em;
                    font-size: .8em;
                    list-style: none;
                    padding: 0;
                    z-index: 20;
                }

                .contenedor-perfil.activo .menu-desplegable {
                    display: grid;
                }

                .contenedor-perfil:hover .menu-desplegable {
                    display: grid;
                }

                .menu-desplegable li {
                    border-bottom: 1px solid #ddd;
                }

                .menu-desplegable li:last-child {
                    border-bottom: none;
                }

                .menu-desplegable a {
                    display: grid;
                    padding: .7em;
                    text-decoration: none;
                    color: black;
                    transition: background 0.2s;
                }

                .menu-desplegable a:hover {
                    background: var(--color-primary);
                    color: var(--color-white);
                }
            }
        }

        .boton-buscar {
            background: none;
            border: none;
            font-size: 1.3em;
            cursor: pointer;
        }

        /*Ocultamos las opciones de búsqueda inicialmente */
        .opciones-busqueda {
            display: none;
            position: absolute;
            top: 15px;
            right: 6.5%;
            transform: translateX(-50%);
            background: white;
            padding: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            width: 200px;
            gap: 1em;
            text-align: center;

            .contenedor-input-busqueda {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px;
                background: #fff;
                border-radius: 8px;
                border: 1px solid #ddd;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                max-width: 300px;
            }

            .input-busqueda {
                flex: 1;
                padding: 8px;
                border: none;
                outline: none;
                font-size: 16px;
                background: transparent;
            }

            .input-busqueda {
                border: none;
                background: transparent;
                cursor: pointer;
                transition: color 0.3s ease-in-out, transform 0.2s ease;
                font-size: 1em;
            }

        }

        /* 🔍 Mostrar input y categorías cuando se hace hover en la lupa */
        .contenedor-busqueda:hover .opciones-busqueda {
            display: grid;
        }

        /* 🖊️ Input de búsqueda */
        .input-busqueda {
            width: 100%;
            padding: 8px;
            border: 1px solid #a68160;
            border-radius: 5px;
            display: grid;
        }

        .boton-categorias {
            background: #a68160;
            color: white;
            border: none;
            padding: 8px;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            text-align: center;
        }

        .submenu-categorias {
            display: none;
            list-style: none;
            background: white;
            border-radius: 5px;
            margin-top: 5px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

            button {
                background: none;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
                text-align: left;
            }

            button:hover {
                background-color: var(--color-primary);
                color: var(--color-white)
            }
        }

        .boton-categorias:hover+.submenu-categorias {
            display: grid;
        }

        .boton-buscar {
            background: var(--color-secondary);
            border: none;
            font-size: 1.3em;
            cursor: pointer;
            color: white;
            transition: 0.3s;
        }

        .imagen-perfil {
            width: clamp(2rem, 6vw, 4rem);
            height: clamp(2rem, 6vw, 4rem);
            object-fit: cover;
            border-radius: 50%;
            border: 1px solid var(--color-primary);
        }

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            height: 100%;
            color: var(--color-primary);
            font-weight: 500;
            font-size: 1.5em;
        }
    }


    @media (max-width: 750px) {
        header {

            .navegacion {
                list-style: none;
                display: flex;
                align-items: center;
                gap: 10px;

                .fa-magnifying-glass {
                    color: var(--color-primary);
                    font-size: .9em;
                }

                .fa-solid {
                    font-size: .9em;
                }
            }

            .boton-buscar {
                background: none;
                border: none;
                font-size: 1.3em;
                cursor: pointer;
            }
        }
    }
</style>

<script>
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

</script>
