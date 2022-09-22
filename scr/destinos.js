
//Importo el arreglo de excursiones
import { excursiones } from "./items.js";



//msajes
const cantNovalid="cant no valida";
const fechaNoValid="fecha no valida";

//Class reservas
class Reserva{
    constructor(idExcursion,cantPersonas,nroReserva,fecha,valorReserva){
        this.id=idExcursion;
        this.cantPersonas=cantPersonas;
        this.nroReserva=nroReserva;
        this.fecha=fecha;
        this.valorReserva=valorReserva;
    }
}


//DOM
const destino = document.getElementById('destino');
const form = document.getElementById('formulario');
const botnAgregar = document.getElementById("btnAgregar");


//busco el parametro que esta en la url que es el id de la excursion
const params = window.location.search;
const urlParams = new URLSearchParams(params);
let idProducto = urlParams.get('id');
const producto = excursiones.find(productoElegido => productoElegido.id === parseInt(idProducto));

function renderizarMuestra(){

    console.log(idProducto);
    //ESTRUCTURA
    const estructura = document.createElement('div');
    estructura.classList.add('card','d-flex','flex-row','justify-content-around');
    // IMAGEN
    const estrImagen = document.createElement('div');
    estrImagen.classList.add('w-50');
    const imagen = document.createElement('img');
    imagen.classList.add('rounded','img-producto');
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
    btnAgregar.classList.add('btnAgregar')
    btnAgregar.addEventListener('click',mostrarForm,false);
    btnAgregar.textContent ='RESERVAR'
    
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

botnAgregar.onclick = function(e){
    
    e.preventDefault();
    const ingresoCant = ingresoCantPersonas();
    const ingresoFecha=saveDate();

    if (ingresoCant===cantNovalid){
        Swal.fire({
            icon: 'error',
            title: 'La cantidad de pasajeros no es valida',
            text: 'Algo salio mal!',
          })
    }else if(ingresoFecha===fechaNoValid){
        Swal.fire({
            icon: 'error',
            title: 'La fecha ingresada no es valida',
            text: 'Algo salio mal!',
          })
    }else{
        let carritoDeCompras = [];
        //const datos= e.target.getAttribute('agregar');
        console.log(ingresoCant);
        // Para guardar un valor a lo largo de la session uso ese storage
        // y para que no se borre, verifico que solo la inicializo si esta nula
        if (sessionStorage.getItem('carrito') === null){
            sessionStorage.setItem('carrito',JSON.stringify(carritoDeCompras));  
        }
        // busco array en el session storage
        carritoDeCompras= JSON.parse(sessionStorage.getItem('carrito'));
        let nroDeReserva=carritoDeCompras.length+1;
        const precio=valorReserva(ingresoCant);
        carritoDeCompras.push(new Reserva(idProducto,ingresoCant,nroDeReserva,ingresoFecha,precio));
        //console.log(carritoDeCompras)
        // Guardo el array modificado en session storage
        sessionStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        contador();
        Swal.fire({
            icon: 'success',
            title: 'Se agrego nueva excursion al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        
    }
}

function mostrarForm(){
    form.style.display = "block";
    moverseA("destino");
}

function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}

function valorReserva(ingresoCant){
    const precioUnidad=parseInt(producto.precio);
    const valorReserva= parseInt(ingresoCant)*precioUnidad;
    return(valorReserva);
}

function ingresoCantPersonas(){
    let cantidad=document.getElementById('ingreso').value;
    cantidad=parseInt(cantidad)
    if(cantidad==null||isNaN(cantidad)||cantidad<=0){
        cantidad=cantNovalid;
    }
    return(cantidad);
}
function saveDate(){
    let fecha=document.getElementById('fecha').value;
    if(fecha===""){
        fecha=fechaNoValid;
    }
    return(fecha);
}

function contador(){
    let listaProductos=JSON.parse(sessionStorage.getItem('carrito'));
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



renderizarMuestra();
contador();




