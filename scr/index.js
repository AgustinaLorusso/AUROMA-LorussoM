//Importo el arreglo de excursiones
import { excursiones } from "./items.js";

//Arrays
let carritoDeCompras=[];

//DOM
const productos = document.getElementById('productos');
const carrito = document.getElementById('carrito');

//Cards de destinos
function renderizarProductos(){
    excursiones.forEach((element)=>{
        //ESTRUCTURA
        const estructura = document.createElement('div');
        estructura.classList.add('card','col','colorGris','cardEstilo','mx-4');
        // IMAGEN
        const imagen = document.createElement('img');
        imagen.classList.add('card-img','imgEstilo','mt-3');
        imagen.setAttribute('src', element.imagen);
        //BODY DE LA CARD
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        //NOMBRE
        const titulo = document.createElement('h5');
        titulo.classList.add('card-title','text-center');
        titulo.textContent = element.nombre;
        //PRECIO
        const precio = document.createElement('p');
        precio.classList.add('card-text','text-center');
        precio.textContent = `${element.precio}`;
        //BOTON
        const btn = document.createElement('button');
        precio.classList.add('card-text','text-center','agregarCompra');
        btn.setAttribute('agregar',element.id);
        btn.addEventListener('click', agregarCarrito);
        btn.textContent ='AGREGAR'


        //INSERTO
        cardBody.appendChild(titulo);
        cardBody.appendChild(precio);
        cardBody.appendChild(btn);
        estructura.appendChild(imagen);
        estructura.appendChild(cardBody);
        productos.appendChild(estructura);
    } )
    
}
//Funcion valor total
function valor(){
    let valorCompra =0;
    carritoDeCompras.forEach((element)=>{
        const producto = excursiones.find(productoElegido => productoElegido.id === parseInt(element));
        valorCompra = valorCompra+producto.precio;
    })
    const msje=`PRECIO TOTAL = ${valorCompra}`;
    return(msje);
}
//Funcion que agrega el producto al carrito
function agregarCarrito(e) {
    carritoDeCompras.push(e.target.getAttribute('agregar'));
    renderizarCarrito();
}

//funcion que elimina del carrito
function EliminarDeCarrito(e){
    const idProdAEliminar = e.target.getAttribute('eliminar');
    const posicionAEliminar=carritoDeCompras.indexOf(idProdAEliminar)
    carritoDeCompras.splice((posicionAEliminar),1);
    renderizarCarrito();
}


//Carrito de compras
function renderizarCarrito(){
    //En el carrito de compras estan guardados los id (item es un id)
    carrito.textContent = '';
    //carritoSinDuplicados tiene un id de c/producto que hay en el carrito.
    const carritoSinDuplicados = [...new Set(carritoDeCompras)];
    //recorro c/id que tine carrito sin duplicados
    carritoSinDuplicados.forEach((item)=>{

        //Guardo la excursion que coincide con el id que se agrego
        const miProducto= excursiones.find(productoElegido =>productoElegido.id === parseInt(item));

        //Cantidad de unidades de un producto
        //itemId son los id que estan guardados en el carrito de compras

        let unidadesProducto =carritoDeCompras.reduce((cantTotal,itemId)=>{ 
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
       carrito.appendChild(cardCarrito);
    });
    //Estructura de donde se muesta valor total
    const valorTotal =  document.createElement('div');
    valorTotal.classList.add('colorGrisClaro','w-75','rounded-4','my-2')
    valorTotal.textContent=valor();
    carrito.appendChild(valorTotal);  
   
}



renderizarCarrito();
renderizarProductos();





















  


