//Importo el arreglo de excursiones
import { excursiones } from "./items.js";


class Input{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
}

//Inputs del form
const inputs=[
    new Input ('Nombre y Apellido','text'),
    new Input('DNI','number'),
    new Input('Email','email'),
]

//DOM
const detalle = document.getElementById('detalle');

//Funcion valor total
function valorFinal(){
    //Guardo la lista de productos elegidos en una variable
    let listaProductos =JSON.parse(sessionStorage.getItem('carrito'));
    let valorCompra =0;
    listaProductos.forEach((element)=>{
      valorCompra = valorCompra+element.valorReserva;
    })
    const msje=`PRECIO FINAL = ${valorCompra}`;
    return(msje);
}

function mostrarFormPorExcursion(){
    //Guardo la lista de productos elegidos en una variable
    let listaProductos =JSON.parse(sessionStorage.getItem('carrito'));
    if(listaProductos===null){
        detalle.textContent=''
        const div= document.createElement('div');
        const text=document.createElement('h5');
        text.textContent='Segui comprando excursiones para tu viaje!'
        const volverAIndex=document.createElement('button');
        volverAIndex.textContent='Volver';
        volverAIndex.addEventListener('click',moverseA,false);
        div.appendChild(text);
        div.appendChild(volverAIndex);
        detalle.appendChild(div);
    }else{
        detalle.textContent='';
        listaProductos.forEach(element => {
            const producto = excursiones.find(productoElegido => productoElegido.id === parseInt(element.id));
            //ESTRUCTURA
            const estructura = document.createElement('div');
            estructura.classList.add('colorGrismedio','rounded-4','mx-3','mt-4','py-3','mb-5')
            //TITULO
            const titulo = document.createElement('h4');
            titulo.textContent=`Excursion: ${producto.nombre}`
            titulo.classList.add('text-center');
            //DATOS
            const datos = document.createElement('div');
            datos.classList.add('d-flex','flex-row','justify-content-evenly','pt-4')
            const cantidad = document.createElement('p');
            cantidad.textContent =`Cantidad de pasajeros: ${element.cantPersonas}`
            datos.appendChild(cantidad);
            const fecha = document.createElement('p');
            fecha.textContent=`Fecha: ${element.fecha}`;
            datos.appendChild(fecha);
            const precio = document.createElement('p');
            precio.textContent=`Precio: ${element.valorReserva}`;
            datos.appendChild(precio);
           //APPENDS
            estructura.appendChild(titulo);
            estructura.appendChild(datos)
            detalle.appendChild(estructura);
            //FORMS SEGUN CANTIDAD DE PASAJEROS
            let cantPasajeros = element.cantPersonas;
            for (let i = 1; i <= cantPasajeros; i++) {
                form(i);
            }
        });

        //VALOR TOTAL
        const mostrarValor=document.createElement('div');
        mostrarValor.classList.add('colorGrismedio','py-2');

        const info =document.createElement('div');
        info.classList.add('d-flex','flex-row','justify-content-evenly')
        const valor =document.createElement('p');
        valor.textContent=valorFinal();
        const btnPagar=document.createElement('button');
        btnPagar.textContent='PAGAR';
        btnPagar.addEventListener('click',borrarHistoria,false);

        info.appendChild(valor);
        info.appendChild(btnPagar);
        mostrarValor.appendChild(info);
        detalle.appendChild(mostrarValor);
    }
    
}

function form(n){

    //ESTRUCTURA
    const estructura = document.createElement('form');
    estructura.classList.add('rounded-4','formStyle','pb-1','pt-3','colorGrismedio','mb-2');

    //TITULO
    const titulo = document.createElement('p');
    titulo.classList.add('card-title','text-center');
    titulo.textContent=`DATOS PERSONALES: Pasajero ${n}`;

    //ESTRUCTURA DATOS DEL FORM
    const datos =document.createElement('div')
    //Inputs
    inputs.forEach(element => {
        const estrInput =document.createElement('div');
        estrInput.classList.add('d-flex','flex-row','justify-content-between','formStyle1','my-4')
        const inputName=document.createElement('p');
        inputName.textContent=`${element.name}: `
        inputName.classList.add('ms-5')
        const input = document.createElement('input');
        input.classList.add('w-25','formStyle2');
        input.setAttribute('type',element.type);
        estrInput.appendChild(inputName);
        estrInput.appendChild(input);
        datos.appendChild(estrInput);
    });
    estructura.appendChild(titulo);
    estructura.appendChild(datos);
    detalle.appendChild(estructura);


}

function moverseA() {
    window.location.href = "../index.html";
  }

//funcion que al tocar el btn pagar borra del session storage
function borrarHistoria(){
    sessionStorage.removeItem('carrito');
    Swal.fire(
        'Compra Realizada!',
        'La informacion de la compra llegara al mail ingresado',
        'success'
    )
    then(moverseA());
    //mostrarFormPorExcursion();

}


mostrarFormPorExcursion();