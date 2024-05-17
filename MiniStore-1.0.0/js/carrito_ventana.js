const contenerdorTargeta = document.getElementById("productos-container");
const unidadeselemento = document.getElementById("unidades");
const precioelemento = document.getElementById("precio");
const carritovacioElemonto = document.getElementById("carrito-vacio");
const totalesElemento= document.getElementById("totales");
const reiniciocarritoElemonto= document.getElementById("reinicio");





function crearTargetaCelus(){
    contenerdorTargeta.innerHTML =" ";
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
                    <span clas="cantidad">${producto.cantidad}</span>
                    <buttom>+</buttom>
                </div>
            `;
            contenerdorTargeta.appendChild(nuevocelu);
            nuevocelu
                .getElementsByTagName("button")[1]
                .addEventListener("click",(e)=> {
                    const cuentaElemnto=e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElemnto.innerText =  agregarcarrito(producto);
                    actualizartotales();
                });
            
            nuevocelu
                .getElementsByTagName("button")[0]
                .addEventListener("click",(e)=>{
                    restarcarrito(producto);
                    crearTargetaCelus();
                    actualizartotales();
            })
        });
    }
}

crearTargetaCelus(celus)
actualizartotales();

function actualizartotales(){
    const productos = JSON.parse(localStorage.getItem("celus"));
    let unidades=0;
    let precio=0;

    if (productos && productos.length>0){
        productos.forEach(productos =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadeselemento.innerText=unidades;
        precioelemento.innerText=precio;
    }
}

function vermensagevacio(){
    const productos = JSON.parse(localStorage.getItem("celus"));
    carritovacioElemonto.classList.toggle("escondido", productos && productos.length>0 );
    carritovacioElemonto.classList.toggle("escondido", productos && productos.length<0);
}

vermensagevacio();

reiniciocarritoElemonto.addEventListener("click",reiniciocarrito)
function reiniciocarrito(){
    localStorage.removeItem("celu");
    actualizartotales();
    crearTargetaCelus();

}