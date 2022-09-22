//Importo el arreglo de excursiones
import { excursiones } from "./items.js";
//Guardo la lista de productos elegidos en una variable
let listaProductos =JSON.parse(sessionStorage.getItem('carrito'));

//DOM
const productos = document.getElementById('productos');

function renderizarProductos(){
    fetch('/productos.json')
        .then( (res) => res.json())
        .then( (datos) => {
            datos.forEach((element)=>{
                //ESTRUCTURA
                const estructura = document.createElement('div');
                estructura.classList.add('card','col','colorGris','cardEstilo','mx-4','formulario');
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
                btn.setAttribute('redirigir',element.id);
                btn.addEventListener('click',redirigir);
                btn.textContent ='+ INFO'
        
                //INSERTO
                cardBody.appendChild(titulo);
                cardBody.appendChild(precio);
                cardBody.appendChild(btn);
                estructura.appendChild(imagen);
                estructura.appendChild(cardBody);
                productos.appendChild(estructura);
            } )
        })

    
}

function redirigir(e){
    const idProducto = e.target.getAttribute('redirigir');
    window.location.href = `./paginas/destinos.html?id=${idProducto}`;
}

function contador(){
    const contador=document.getElementById('contador');
    contador.textContent='';
    let cantEncarrito=document.createElement('p');
    let cantItems=0;
    if (listaProductos===null){
        cantItems=0;
    }else{
        cantItems=listaProductos.length;
    }
    cantEncarrito.textContent=cantItems;
    contador.appendChild(cantEncarrito);
}



//FILTRADO DE PRODUCTOS

//DOM
const buscador = document.getElementById('buscador');




//renderizarCarrito();
renderizarProductos();
contador();





















  


