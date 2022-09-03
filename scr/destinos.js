
//Importo el arreglo de excursiones
import { excursiones } from "./items.js";


//DOM
const destino = document.getElementById('destino');



function renderizarMuestra(){

    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    let idProducto = urlParams.get('id');
    console.log(idProducto);
    const producto = excursiones.find(productoElegido => productoElegido.id === parseInt(idProducto));
    //ESTRUCTURA
    const estructura = document.createElement('div');
    estructura.classList.add('card','d-flex','flex-row','justify-content-around');
    // IMAGEN
    const estrImagen = document.createElement('div');
    estrImagen.classList.add('w-50');
    const imagen = document.createElement('img');
    imagen.classList.add('card-img','img-producto');
    imagen.setAttribute('src', `.${producto.imagen}`);
    //BODY DE LA CARD
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body','w-75');
    //NOMBRE
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title','text-center','my-5');
    titulo.textContent = producto.nombre;
    //INFORMACION
    const info = document.createElement('p');
    info.classList.add('card-text','text-center','my-5');
    info.textContent = `${producto.info}`;
    //PRECIO
    const precio = document.createElement('p');
    precio.classList.add('card-text','text-center','mt-5');
    precio.textContent = `PRECIO:$${producto.precio}`;
    //BOTON AGREGAR AL CARRITO
    //BOTON
    const btnAgregar = document.createElement('button');
    btnAgregar.setAttribute('agregar',producto.id);
    btnAgregar.classList.add('btnAgregar')
    btnAgregar.addEventListener('click',agregarCarrito);
    btnAgregar.textContent ='AGREGAR'
    
    //INSERTO
    cardBody.appendChild(titulo);
    cardBody.appendChild(info);
    cardBody.appendChild(precio);
    estrImagen.appendChild(imagen);
    cardBody.appendChild(btnAgregar);
    estructura.appendChild(estrImagen);
    estructura.appendChild(cardBody);
    destino.appendChild(estructura);
}
    
    

//ARRAY CARRITO DE COMPRAS

function agregarCarrito(e)
{    
    let carritoDeCompras = [];
    const id= e.target.getAttribute('agregar');
    // Para guardar un valor a lo largo de la session uso ese storage
    // y para que no se borre, verifico que solo la inicializo si esta nula
    if (sessionStorage.getItem('carrito') === null){
         sessionStorage.setItem('carrito',JSON.stringify(carritoDeCompras));  
    }
    console.log(carritoDeCompras)
    // busco array en el session storage
    carritoDeCompras= JSON.parse(sessionStorage.getItem('carrito'));
    carritoDeCompras.push(id);
    // Guardo el array modificado en session storage
    sessionStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
}

renderizarMuestra()

