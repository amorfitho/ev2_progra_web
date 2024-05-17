const contenerdorTargeta = document.getElementById("productos-container")


function crearTargetaCelus(producto){
    productos.forEach(producto => {
        const nuevocelu= document.createElement("div");
        nuevocelu.classList="targeta-producto";
        nuevocelu.innerHTML=`
            <img scr".imagenes/productos/celus/${producto.id}.jpg">
            <button>/agregar a carrito</button>
            <h3>/${producto.nombre}</h3>
            <p>/$${producto.precio}</p>
        `
        contenerdorTargeta.appendChild(nuevocelu);
        contenerdorTargeta.getElementsByTagName("button")[0].addEventListener("click",()=>agregarcarrito(producto) )
    });
}


crearTargetaCelus(celus)