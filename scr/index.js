
//Guardo la lista de productos elegidos en una variable
let listaProductos =JSON.parse(sessionStorage.getItem('carrito'));

//DOM
const productos = document.getElementById('productos');

//funcion de estructura
function estructura(element,domElement){
    const estructura = document.createElement('div');
    estructura.classList.add('card','col','colorGris','cardEstilo','mx-4','rounded','mt-5');
    // IMAGEN
    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top','imgEstilo','mt-2');
    imagen.setAttribute('src', element.imagen);
    //BODY DE LA CARD
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    //NOMBRE
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title','text-center');
    titulo.textContent = element.nombre;
    //TEXTO
    const text=document.createElement('p');
    text.classList.add('card-text');
    text.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est provident vero ex ipsum numquam sapiente quisquam. Ipsum, quidem et molestiae adipisci voluptatum enim, laboriosam in labore nisi repellat qui'
    //PRECIO
    const precio = document.createElement('p');
    precio.classList.add('card-text','text-center');
    precio.textContent = `$${element.precio}`;
    //BOTON
    const divBtn = document.createElement('div');
    divBtn.classList.add('d-flex','justify-content-center');
    const btn = document.createElement('button');
    btn.classList.add("text-center")
    btn.setAttribute('redirigir',element.id);
    btn.addEventListener('click',redirigir);
    btn.textContent ='DETALLE'

    //INSERTO
    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(text);
    divBtn.appendChild(btn);
    cardBody.appendChild(divBtn);
    estructura.appendChild(imagen);
    estructura.appendChild(cardBody);
    domElement.appendChild(estructura);
}

// funcion que muestra las distintas excursiones
function renderizarProductos(){
    fetch('/productos.json')
    .then( (res) => res.json())
    .then( (datos) => {
        datos.forEach((element)=>{
            estructura(element,productos);
        })
    }) 
}

//redirige a la pagina del prodcuto selecionado enviando como parametro su id
function redirigir(e){
    const idProducto = e.target.getAttribute('redirigir');
    window.location.href = `./paginas/destinos.html?id=${idProducto}`;
}

//contador de productos en el carrito
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

//elementos del dom
const btnBuscar = document.getElementById('buscador');
const mostrarSeleccion = document.getElementById('mostrarSeleccion');
const verExcursiones=document.getElementById('verExcursiones');

//evento click
btnBuscar.addEventListener('click',filtrado,false);

function filtrado(){
    //guardo datos de la seleccion
    const tipoPais = document.getElementById('pais').value;
    const tipoAct = document.getElementById('tipoAct').value;
    //variable seleccion
    let seleccion =0;
    console.log(tipoPais)
    console.log(tipoAct)
    fetch('/productos.json')
    .then( (res) => res.json())
    .then( (datos)=>{
        if ((tipoAct==="all")&&(tipoPais==="all")){
            seleccion=datos;
        }else if((tipoAct==="all")&&(tipoPais!="all")){
            seleccion = datos.filter(element => (element.categoria1 === tipoPais));
        }else if((tipoPais==="all")&&(tipoAct!="all")){
            seleccion = datos.filter(element => (element.categoria2 === tipoAct));
        }else{
            seleccion = datos.filter(element => ((element.categoria1 === tipoPais)&&(element.categoria2 === tipoAct)));
        }

        if(seleccion.length===0){
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos...',
                text: 'Tu busqueda no coincide con ninguna de nuestras excursiones',
              })
        }else{
            console.log(seleccion)
            mostrarSeleccion.textContent = '';
            seleccion.forEach((element)=>{
                estructura(element,mostrarSeleccion);   
            }) 
            verExcursiones.style.display = "none";
        }
    })   
}

renderizarProductos();
contador();



















  


