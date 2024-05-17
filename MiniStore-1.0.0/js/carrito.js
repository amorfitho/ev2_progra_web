function agregarcarrito(producto){
    const memoria=JSON.parse(localStorage.getItem("celu"));
    console.log(memoria);
    let cuenta=0;
    if (!memoria){
        const nuevoproducto=getnuevoproductomemoria(producto);
        localStorage.setItem("celus",JSON.stringify([nuevoproducto]))
        cuenta =1;
    }else{
        const indiceproducto = memoria.findIndex(celus => celus.id === producto.id);
        cosole.log(indiceproducto)
        const nuevamemoria = memoria;
        if (indiceproducto=-1){
            nuevamemoria.push(getnuevoproductomemoria(producto))
            cuenta=1;
        }else{
            nuevamemoria[indiceproducto].cantidad ++;
            cuenta=nuevamemoria[indiceproducto].cantidad;
        }
        localStorage.setItem("celus",JSON.stringify(nuevamemoria))
        return cuenta;
    }
    actualizarnumcarrito()
}

function restarcarrito(producto){
    const memoria=JSON.parse(localStorage.getItem("celu"));
    const indiceproducto = memoria.findIndex(celus => celus.id === producto.id);
    if(memoria[indiceproducto].cantidad === 1){
        memoria.splice(indiceproducto,1)
        
    }else{
        memoria[indiceproducto].cantidad--;

    }
    localStorage.setItem("celus",JSON.stringify(memoria));
    actualizarnumcarrito();
    return cuenta;
}

function getnuevoproductomemoria(producto){
    const nuevoproducto = producto;
    nuevoproducto.cantidad=1;
    return nuevoproducto;
}

const cuentacarritoElement = document.getElementById("cuenta-carrito")

function actualizarnumcarrito(){
    const memoria=JSON.parse(localStorage.getItem("celu"));
    if(memoria && memoria.length>0){
    const cuenta=memoria.reduce((acum,current) => acum+current.cantidad,0);
    cuentacarritoElement.innerText=cuenta;
    console.log(cuenta)
    }else{
        cuentacarritoElement.innerText = 0;
    }
    
}

actualizarnumcarrito();
