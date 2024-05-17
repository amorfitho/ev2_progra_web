const contenerdorTargeta = document.getElementById("productos-container")


function crearTargetaCelus(producto){
    productos.forEach(producto => {
        const nuevocelu= document.createElement("div");
        nuevocelu.classList="targeta-producto";
        nuevocelu.innerHTML=`
            <img scr"./images/${producto.id}.jpg">
            <h3>/${producto.nombre}</h3>
            <p>/$${producto.precio}</p>
            <button>/agregar a carrito</button>
        `
        contenerdorTargeta.appendChild(nuevocelu);
        contenerdorTargeta.getElementsByTagName("button")[0].addEventListener("click",()=>agregarcarrito(producto) )
    });
}


crearTargetaCelus(celus)