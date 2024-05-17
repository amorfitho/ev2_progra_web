function agregarcarrito(producto){
    const memoria=JSON.parse(localStorage.getItem("celu"));
    console.log(memoria);
    if (!memoria){
        const nuevoproducto=getnuevoproductomemoria(producto);
        localStorage.setItem("celus",JSON.stringify([nuevoproducto]))
    }else{
        const indiceproducto = memoria.findIndex(celus => celus.id === producto.id);
        cosole.log(indiceproducto)
        const nuevamemoria = memoria;
        if (indiceproducto=-1){
            nuevamemoria.push(getnuevoproductomemoria(producto))
        }else{
            nuevamemoria[indiceproducto].cantidad ++;
        }
        localStorage.setItem(celus,JSON.stringify(nuevamemoria))
    }
    actualizarnumcarrito()
}

function getnuevoproductomemoria(producto){
    const nuevoproducto = producto;
    nuevoproducto.cantidad=1;
    return nuevoproducto;
}

const cuentacarritoElement = document.getElementById("cuenta-carrito")

function actualizarnumcarrito(){
    const memoria=JSON.parse(localStorage.getItem("celu"));
    const cuenta=memoria.reduce((acum,current) => acum+current.cantidad,0);
    cuentacarritoElement.innerText=cuenta;

}

actualizarnumcarrito();
