
function ver_casual() {
    const catalogo=document.getElementById("catalogo");
    catalogo.innerHTML='';
    const tarjetas=`
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/chamarramezclilla.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Chaqueta Jean</b></h5>
            <p class="card-text">Chaqueta de mezclilla clásica</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/camiseta_uno.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Camiseta Basica</b></h5>
            <p class="card-text">Camiseta de algodón suave y cómoda</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/blusa_naranja.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Blusa Naranja</b></h5>
            <p class="card-text">Blusa de diseño moderno y elegante</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>`;
    catalogo.innerHTML=tarjetas;
    catalogo.style.justifyContent='center';
    catalogo.style.display='gid';
}

function ver_calzado() {
    const catalogo=document.getElementById("catalogo");
    catalogo.innerHTML='';
    const tarjetas=`
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_uno.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras y cómodas</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_dos.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras para correr</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_tres.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras y transpirables</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>`;

    catalogo.innerHTML=tarjetas;
    catalogo.style.justifyContent='center';
    catalogo.style.display='grid';
}

function ver_todo() {
    const catalogo=document.getElementById("catalogo");
    catalogo.innerHTML='';
    const tarjetas=`
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/BERMUDA-NEGRA-600x600.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Bermuda Deportiva</b></h5>
            <p class="card-text">Short cómodo y ligero para hombre</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_uno.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras y cómodas</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/camiseta_uno.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Camiseta Basica</b></h5>
            <p class="card-text">Camiseta de algodón suave y cómoda</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/pantalon_deportivo.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Pantalon Deportivo</b></h5>
            <p class="card-text">Pantalón de entrenamiento ajustado y cómodo</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_dos.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras para correr</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/blusa_naranja.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Blusa Naranja</b></h5>
            <p class="card-text">Blusa de diseño moderno y elegante</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/chamarramezclilla.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Chaqueta Jean</b></h5>
            <p class="card-text">Chaqueta de mezclilla clásica</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/camiseta_doswebp.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Camiseta Deportiva</b></h5>
            <p class="card-text">Camiseta técnica ligera y transpirable</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_zapatos/zapato_tres.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Tenis Deportivos</b></h5>
            <p class="card-text">Zapatillas deportivas ligeras y transpirables</p>
            <p class="card-text">Disponibles en varios colores</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/pantalon_deportivo2.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Pantalon Deportivo</b></h5>
            <p class="card-text">Pantalon Deportivo de algodón cómodo</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>`;
    catalogo.innerHTML=tarjetas;
    catalogo.style.justifyContent='center';
    catalogo.style.display='gid';
}



function ver_deportivo() {
    const catalogo=document.getElementById("catalogo");
    catalogo.innerHTML='';
    const tarjetas=`
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/BERMUDA-NEGRA-600x600.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Bermuda Deportiva</b></h5>
            <p class="card-text">Short cómodo y ligero para hombre</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/pantalon_deportivo.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Pantalon Deportivo</b></h5>
            <p class="card-text">Pantalón de entrenamiento ajustado y cómodo</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/camiseta_doswebp.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Camiseta Deportiva</b></h5>
            <p class="card-text">Camiseta técnica ligera y transpirable</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="/imagenes/Imagenes_ropa/pantalon_deportivo2.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5><b>Pantalon Deportivo</b></h5>
            <p class="card-text">Pantalon Deportivo de algodón cómodo</p>
            <p class="card-text">Disponibles en 1 color</p>
        </div>
    </div>`;
    catalogo.innerHTML=tarjetas;
    catalogo.style.justifyContent='center';
    catalogo.style.display='gid';
}
