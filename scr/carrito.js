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
      valorCompra = valorCompra+element.valorReserva;
    })
    const msje=`PRECIO TOTAL = ${valorCompra}`;
    return(msje);
}

//funcion que muestra un alert y elimina del carrito
function EliminarDeCarrito(e){   
 const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro que quieres eliminar la excursion?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Eliminado',
        'La excursion se elimino del carrito',
        'success'
      )
      //guarda nro de reserva 
      const idProdAEliminar = e.target.getAttribute('eliminar');
      console.log(idProdAEliminar)
      const excursionEliminar = listaProductos.find(productoElegido =>productoElegido.nroReserva === parseInt(idProdAEliminar));
      const posicionAEliminar=listaProductos.indexOf(excursionEliminar);
      listaProductos.splice((posicionAEliminar),1);
      //modifico el sessionStorage
      sessionStorage.setItem('carrito', JSON.stringify(listaProductos));
      renderizarCarrito();
      contador();
    }
  })
   
}


//Carrito de compras
function renderizarCarrito(){
    if ((listaProductos === null)){
        const carritoVacio= document.createElement('div');
        carritoVacio.textContent='CARRITO VACIO';
        mostrarCarrito.appendChild(carritoVacio);
    }else{
        //En el carrito de compras estan guardados c/excursion
        mostrarCarrito.textContent = '';
        listaProductos.forEach((element)=>{
            //Guardo la excursion que coincide con el id que se agrego
            const miProducto= excursiones.find(productoElegido =>productoElegido.id === parseInt(element.id));
    
            // Renderizo el CARRITO DE COMPRAS
            //ESTRUCTURA
            const cardCarrito = document.createElement('div');
            cardCarrito.classList.add('col','estiloCarrito','rounded-4','my-2');
            //IMAGEN
            const imgCarrito = document.createElement('img');
            imgCarrito.classList.add('imgCarrito','py-2','rounded')
            imgCarrito.setAttribute('src', `.${miProducto.imagen}`);
            //BODY
            const cardCarritoBody = document.createElement('div');
            cardCarritoBody.classList.add('card-body')
            const tituloProducto = document.createElement('h5');
            tituloProducto.classList.add('card-title','text-center');
            tituloProducto.textContent=`${miProducto.nombre}`;
            const informacion = document.createElement('div');
            informacion.classList.add('d-flex','flex-column','align-items-center');
            const datoCant=document.createElement('p')
            datoCant.textContent=`Cantidad de pasajeros: ${element.cantPersonas}`
            const datoFecha=document.createElement('p')
            datoFecha.textContent=`Fecha: ${element.fecha}`
            informacion.appendChild(datoCant);
            informacion.appendChild(datoFecha);
            //BOTON PARA ELIMINAR
            const btnEliminar = document.createElement('button');
            btnEliminar.setAttribute('eliminar',element.nroReserva);
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
    valorTotal.classList.add('gris','w-75','rounded-4','py-2','d-flex','flex-row','justify-content-between','mb-2')
    const mostrarValor=document.createElement('p');
    mostrarValor.textContent=valor();
    const btnCompraFinal = document.createElement('button');
    btnCompraFinal.classList.add('rounded');
    btnCompraFinal.setAttribute('formCompra',listaProductos);
    btnCompraFinal.textContent='COMPRAR';
    btnCompraFinal.addEventListener('click',moverseA);
    valorTotal.appendChild(mostrarValor);
    valorTotal.appendChild(btnCompraFinal);
    mostrarCarrito.appendChild(valorTotal);
    
   
}

function moverseA() {
  window.location.href = "./formulario.html";
}

//Funcion contador de carrito
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


renderizarCarrito();
contador();