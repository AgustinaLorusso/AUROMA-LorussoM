//Importo el arreglo de excursiones
import { excursiones } from "./items.js";


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


//CARDS DE DESTINOS
/*function renderizarProductos(){

    excursiones.forEach((element)=>{
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
    
}*/

function redirigir(e){
    const idProducto = e.target.getAttribute('redirigir');
    window.location.href = `./paginas/destinos.html?id=${idProducto}`;
}

//DOM
/*const cantidad = document.getElementsByClassName('agregarCompra');
const formcnt = document.getElementsByClassName('formulario');
/*cantidad.onclick = function(e){
    //estructura
    const cntEstructura=document.createElement('div');
    const ingreso=document.createElement('input');
    ingreso.textContent='Cantidad de pasajeros';
    cntEstructura.appendChild(ingreso);
    formcnt.appendChild(cntEstructura);
}*/

//Funcion cantidad de pasajeros
/*cntPasajeros(e){
    //estructura
    const cntEstructura=document.createElement('div');
    const ingreso=document.createElement('input');
    ingreso.textContent='Cantidad de pasajeros';
    cntEstructura.appendChild(ingreso);
    cantidad.appendChild(cntEstructura);
}*/


//FILTRADO DE PRODUCTOS

//DOM
const buscador = document.getElementById('buscador');




//renderizarCarrito();
renderizarProductos();





















  


