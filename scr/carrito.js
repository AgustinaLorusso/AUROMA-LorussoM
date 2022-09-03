//Importo el arreglo de excursiones
import { excursiones } from "./items.js";

//DOM
const mostrarCarrito = document.getElementById('muestraCarrito');

//Guardo la lista de productos elegidos en una variable
let listaProductos =JSON.parse(sessionStorage.getItem('carrito'));

//FUNCIONES DEL CARRTIO

//Funcion valor total
function valor(){
    let valorCompra =0;
    listaProductos.forEach((element)=>{
        const producto = excursiones.find(productoElegido => productoElegido.id === parseInt(element));
        valorCompra = valorCompra+producto.precio;
    })
    const msje=`PRECIO TOTAL = ${valorCompra}`;
    return(msje);
}

//funcion que elimina del carrito
function EliminarDeCarrito(e){
    const idProdAEliminar = e.target.getAttribute('eliminar');
    const posicionAEliminar=listaProductos.indexOf(idProdAEliminar)
    listaProductos.splice((posicionAEliminar),1);
    //modifico el sessionStorage
    sessionStorage.setItem('carrito', JSON.stringify(listaProductos));
    renderizarCarrito();
}


//Carrito de compras
function renderizarCarrito(){
    if ((listaProductos === null)){
        const carritoVacio= document.createElement('div');
        carritoVacio.textContent='CARRITO VACIO';
        mostrarCarrito.appendChild(carritoVacio); 
    }else{
        console.log(listaProductos)
        //En el carrito de compras estan guardados los id (item es un id)
        mostrarCarrito.textContent = '';
        //carritoSinDuplicados tiene un id de c/producto que hay en el carrito.
        const carritoSinDuplicados = [...new Set(listaProductos)];
        //recorro c/id que tine carrito sin duplicados
        carritoSinDuplicados.forEach((item)=>{
            //Guardo la excursion que coincide con el id que se agrego
            const miProducto= excursiones.find(productoElegido =>productoElegido.id === parseInt(item));

            //Cantidad de unidades de un producto
            //itemId son los id que estan guardados en el carrito de compras

            let unidadesProducto =listaProductos.reduce((cantTotal,itemId)=>{ 
                //funcion que toma a CantTotal como parametro anterior (empieza en 0)
                return itemId === item ? cantTotal+=1 : cantTotal;
            },0);
            // Renderizo el CARRITO DE COMPRAS
            //ESTRUCTURA
            const cardCarrito = document.createElement('div');
            cardCarrito.classList.add('col','estiloCarrito','rounded-4','my-2');
            //IMAGEN
            const imgCarrito = document.createElement('img');
            imgCarrito.classList.add('imgCarrito','rounded-start')
            imgCarrito.setAttribute('src', miProducto.imagen);
            //BODY
            const cardCarritoBody = document.createElement('div');
            cardCarritoBody.classList.add('card-body')
            const tituloProducto = document.createElement('h5');
            tituloProducto.classList.add('card-title','text-center');
            tituloProducto.textContent=`${miProducto.nombre}`;
            const informacion = document.createElement('p');
            informacion.classList.add('text-center');
            informacion.textContent=`CANTIDAD:${unidadesProducto}`
            //BOTON PARA ELIMINAR
            const btnEliminar = document.createElement('button');
            btnEliminar.setAttribute('eliminar',miProducto.id);
            btnEliminar.addEventListener('click', EliminarDeCarrito);
            btnEliminar.textContent='ELIMINAR'
            //inserto
            cardCarritoBody.appendChild(tituloProducto);
            cardCarritoBody.appendChild(informacion);
            cardCarritoBody.appendChild(btnEliminar);
            cardCarrito.appendChild(imgCarrito);
            cardCarrito.appendChild(cardCarritoBody);
            mostrarCarrito.appendChild(cardCarrito);
        });

        if ((listaProductos.length===0)){
            const carritoVacio= document.createElement('div');
            carritoVacio.textContent='CARRITO VACIO';
            mostrarCarrito.appendChild(carritoVacio);
        }
    }
    
    //Estructura de donde se muesta valor total
    const valorTotal =  document.createElement('div');
    valorTotal.classList.add('colorGrisClaro','w-75','rounded-4','my-2')
    valorTotal.textContent=valor();
    mostrarCarrito.appendChild(valorTotal);
   
}

renderizarCarrito()