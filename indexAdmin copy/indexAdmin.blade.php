<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet"  href="{{ asset('Css/Index/indexAdmin.css') }}">
    <title>Mi Negocio | MyLook</title>
</head>


<body>
        {{-- importamos el componente header --}}
        <x-header tipo="usuario" />

        <main>
            <button class="menu-btn" id="menu-toggle">
                ☰
            </button>
    
            <aside class="contenedor-bandeja" id="sidebar">
                <div class="encabezado-bandeja">
                    <p>BANDEJA DE ENTRADA</p>
                </div>
                <div class="contenido-bandeja">
                    <!-- Elemento 1 -->
                    <div class="elemento-bandeja">
                        <div class="contenedor-fecha">
                            <div class="numero-fecha">
                                <p>18</p>
                            </div>
                            <div class="mes-fecha">
                                <p>jun</p>
                            </div>
                        </div>
                        <div class="texto-solicitud">
                            <p>Solicitud de producto</p>
                        </div>
                        <div class="contenedor-icono">
                            <div class="sobre">
                                <i
                                    class="fa-solid fa-envelope-open  $estado == 'pendiente' ? 'icono-pendiente' : 'icono-realizada' }}"></i>
                            </div>
                        </div>
                    </div>
    
    
    
                    <!-- Puedes agregar más elementos aquí para probar el scroll -->
                    <div class="elemento-bandeja">
                        <div class="contenedor-fecha">
                            <div class="numero-fecha">18</div>
                            <div class="mes-fecha">jun</div>
                        </div>
                        <div class="texto-solicitud">Solicitud de producto</div>
                        <div class="contenedor-icono">
                            <div class="sobre">
                                <i
                                    class="fa-solid fa-envelope-open  $estado == 'pendiente' ? 'icono-pendiente' : 'icono-realizada' }}"></i>
                            </div>
                        </div>
                    </div>
    
                    <div class="elemento-bandeja elemento_leido">
                        <div class="contenedor-fecha">
                            <div class="numero-fecha">18</div>
                            <div class="mes-fecha">jun</div>
                        </div>
                        <div class="texto-solicitud">Solicitud de producto</div>
                        <div class="contenedor-icono">
                            <div class="sobre">
                                <i
                                    class="fa-solid fa-envelope-open  $estado == 'pendiente' ? 'icono-pendiente' : 'icono-realizada' }}"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <section class="contenedor-administrador">
                <nav class="navegacion">
                    <button type="submit" class="boton-seccion">INICIO</button>
                    <button type="submit" class="boton-seccion">STAFF</button>
                    <button type="submit" class="boton-seccion">PRODUCTOS</button>
                    <button type="submit" class="boton-seccion">SERVICIOS</button>
                </nav>
    
                <section class="secciones">
    
                    <div class="inicio" id="inicio">
    
                        <figure class="portada">
                            <img src="https://img.freepik.com/foto-gratis/sillas-vintage-peluqueria_155003-10150.jpg?t=st=1741447697~exp=1741451297~hmac=01d30b991787161b9275570c9079ef23f665daf1e5feb8ccd7e2139910268521&w=1060"
                                alt="Imagen de portada de la barbería" class="imagen-portada">
                            <img src="https://d1yjjnpx0p53s8.cloudfront.net/logotipo-imperio-barberia-vector1.png"
                                alt="Logo de la barbería" class="foto-imagen-perfil">
    
                            <!-- Botones de edición -->
                            <button class="boton-editar editar-perfil-establecimiento"
                                aria-label="Editar imagen de perfil">✏️</button>
                            <button class="boton-editar editar-portada" aria-label="Editar imagen de portada">✏️</button>
                        </figure>
    
                        <figcaption class="descripcion">Imagen de portada y perfil</figcaption>
                    </div>
    
                    <div class="staff seccion-opcion" id="staff">
                        <form class="agregar" action="{{ route('staff', ['accion' => 'register']) }}" method="POST">
                            @csrf
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-plus"></i>
                                <p>AGREGAR</p>
                            </button>
                        </form>
    
                        @foreach($infoStaff as $item)
                        <article class="carta" id="carta-staff">
                            <figure class="carta-imagen" id="foto-staff">
                                <img src="https://s1.ppllstatics.com/laverdad/www/multimedia/202301/31/media/cortadas/barbero-kLSB-U190459991003paG-1248x770@La%20Verdad.jpg"
                                    alt="">
                                <p class="rol">Barbero</p>
                            </figure>
                            <h3>{{$item['usuario']['nombre']}}</h3>
                            <div class="contenedor-botones">
                                <form action="{{ $staff['id_staff'] }}">
                                    <button class="boton" type="submit" value="{{ $staff['id_staff'] }}"
                                        name="editStaff">Editar</button>
                                </form>
                                <form action="{{ $staff['id_staff'] }}">
                                    <button class="boton" type="submit" value="{{ $staff['id_staff'] }}"
                                        name="deleteStaff">Eliminar</button>
                                </form>
                            </div>
    
                        </article>
                        @endforeach
    
    
                        <form class="agregar" action="../../View/Administrador/viewStaff.html" method="get">
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-users"></i>
                                <p>VER TODOS</p>
                            </button>
                        </form>
                    </div>
    
                    <div class="productos seccion-opcion" id="productos">
                        <form class="agregar" action="{{ route('staff', ['accion' => 'register']) }}" method="POST">
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-plus"></i>
                                <p>AGREGAR</p>
                            </button>
                        </form>
                    @foreach($productsPreview as $product)
                        <article class="carta">
                            <figure class="carta-imagen">
                                <img src="{{$product['img_prod']}}" alt="">
                                <p class="stock">{{$product['stock']}}</p>
                                <p class="precio"><span>{{$product['valor_prod']}}</span></p>
                            </figure>
                            <h3>{{$product['nombre_prod']}}</h3>
                            <p>{{$product['desc_prod']}}</p>
                            <div class="contenedor-botones">
                                <form action="{{ route('productos', ['accion' => 'editar']) }}" method="POST">
                                    @csrf
                                    <button class="boton" type="submit" value="{{$product['id_prod']}}"
                                        name="editProducto">Editar</button>
                                </form>
                                <form action="{{ route('productos', ['accion' => 'eliminar']) }}" method="POST">
                                    @csrf
                                    <button class="boton" value="{{$product['id_prod']}}"
                                        name="deleteProducto">Eliminar</button>
                                </form>
                            </div>
                        </article>
                    @endforeach
    
                        <form class="ver-todos" action="{{ route('productos', ['accion' => 'ver']) }}" method="get">
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-boxes-stacked"></i>
                                <p>VER TODOS</p>
                            </button>
                        </form>
                    </div>
    
                    <div class="servicios seccion-opcion" id="servicios">
                        <form class="agregar" action="{{ route('staff', ['accion' => 'register']) }}" method="POST">
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-plus"></i>
                                <p>AGREGAR</p>
                            </button>
                        </form>
                @foreach($categorias as $categoria)

                        <article class="carta">
                            <figure class="carta-imagen">
                                <img src="https://img.freepik.com/foto-gratis/bodegon-ajuste-autocuidado-masculino-alto-angulo_23-2150326535.jpg?t=st=1742876064~exp=1742879664~hmac=8e04151297cc48f08d7b9c9c5a0461913afeb5edf9a11ec08a18b3302d2ee9e9&w=996"
                                    alt="">
                            </figure>
                            <h3>Cortes de cabello</h3>
                            <p>cambio de estilo o longitud del cabello. Puede ser realizado con tijeras, cuchillas, máquinas
                                de rasurar o afeitar.</p>
                            <div class="contenedor-botones">
                                <form action="">
                                    <button class="boton" type="submit" value=""
                                        name="editProducto">Editar</button>
                                </form>
                                <form action="">
                                    <button class="boton" value=""
                                        name="deleteProducto">Eliminar</button>
                                </form>
                            </div>
                        </article>
                @endforeach
                        <form class="ver-todos" action="{{ route('productos', ['accion' => 'ver']) }}" method="POST">
                            <button type="submit" style="background: none;">
                                <i class="fa-solid fa-star"></i>
                                <p>VER TODOS</p>
                            </button>
                        </form>
                    </div>
    
                    <div class="contenedor-notificacion" id="notificacion">
                        <h3 class="motivo-carta">Solicitud de producto</h3>
                        <div class="carta-notificaion">
                            <div class="contenedor-izquierda"
                                style="background-image: url('https://img.freepik.com/foto-gratis/bodegon-ajuste-autocuidado-masculino-alto-angulo_23-2150326535.jpg?t=st=1742876064~exp=1742879664~hmac=8e04151297cc48f08d7b9c9c5a0461913afeb5edf9a11ec08a18b3302d2ee9e9&w=996');">
                                <h3>Crema daily grind</h3>
                            </div>
                            <div class="contenedor-derecha">
                                <div class="foto-nombre">
                                    <img src="https://media.istockphoto.com/id/1766352902/es/v%C3%ADdeo/diversidad-de-personas-muchas-razas-diferentes-retrato-de-rostro-multi%C3%A9tnico-mezcla-humana.jpg?s=640x640&k=20&c=jJK56ZTa6OJ5eFLsMoIWd9M-YvuumhuE5b-69Q2MYEc="
                                        alt="">
                                    <div class="solicitud">
                                        <p class="requisito">Solicitado por</p>
                                        <p>Daniel Alzate</p>
                                    </div>
                                </div>
                                <div class="contenedor-requisito">
                                    <p class="requisito">Fecha entrega</p>
                                    <p>02/06/2025</p>
                                </div>
                                <div class="contenedor-requisito">
                                    <p class="requisito">Hora</p>
                                    <p>07:00 AM</p>
                                </div>
                                <div class="contenedor-requisito">
                                    <p class="requisito">Precio unitario</p>
                                    <p>30.000 COP</p>
                                </div>
                                <div class="contenedor-requisito">
                                    <p class="requisito">cantidad</p>
                                    <p>2</p>
                                </div>
                                <div class="contenedor-requisito total">
                                    <p class="requisito">Total</p>
                                    <p>60.000 COP</p>
                                </div>
                                <div class="contenedor-botones">
                                    <form action="#">
                                        <button class="boton" type="submit" value=""
                                            name="RechazarSolicitud">Rechazar</button>
                                    </form>
                                    <form action="#">
                                        <button class="boton" value="#" name="AceptarSolicitud">Aceptar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    
        </main>





    <script src="/Js/Admin/indexAdmin.js">

    </script>
</body>
</html>