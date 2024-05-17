const contenerdorTargeta = document.getElementById("productos-container")


function crearTargetaCelus(){
    const productos = JSON.parse(localStorage.getItem("celus"));
    console.log(productos)
    if(productos && productos.length>0){
        productos.forEach(producto => {
            const nuevocelu= document.createElement("div");
            nuevocelu.classList="targeta-producto";
            nuevocelu.innerHTML=`
                <img scr".imagenes/productos/celus/${producto.id}.jpg">
                <h3>/${producto.nombre}</h3>
                <p>/$${producto.precio}</p>
                <div>
                    <buttom>-</buttom>
                    <span clas="cantidad">0</span>
                    <buttom>+</buttom>
                </div>
            `;
            contenerdorTargeta.appendChild(nuevocelu);
            contenerdorTargeta.getElementsByTagName("button")[0].addEventListener("click",()=>agregarcarrito(producto) )
        });
    }
}


crearTargetaCelus(celus)