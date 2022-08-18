
//Boton de calculo de valor y el form 
const btnValor= document.getElementById("btnValor");
const form=document.getElementById("excursiones");
const btnAgregar=document.getElementById("agregar");
//const muestraCompras=document.getElementById("compras");

//Clase que tiene como atributo el nombre,precio y numero asociados a la excursion.
class Excursion{
    constructor(nombre,precio,nroExcursion){
        this.nombre=nombre;
        this.precio=precio;
        this.nroExcursion=nroExcursion;
    }
}
//Arreglo de excursiones dentro de un array
const excursiones=[
    new Excursion("caminata por el perito moreno",1900,1),
    new Excursion("kiteboarding en italia",2900,2),
    new Excursion("esqui por bulgaria",3900,3),
]
//mensajes
const msjeDatoNoValido="La cantidad de pasajeros ingresada no es valida."
const msjeIdNovalido="El ID ingresado no pertenece a ninguna excursion";

//  Funcion que calcula el valor de cada excursion segun la cantidad de personas que asistiran
function calculoPrecio(datos,numero){
    return(datos.precio*numero);
} 

function ingresoCantPersonas(){
    let cantidad=document.getElementById('cantPersonas').value;
    cantidad=cantidad.trim();
    cantidad=parseInt(cantidad)
    if(cantidad==""||isNaN(cantidad)|| cantidad<=0){
        cantidad=msjeDatoNoValido;
    }
    return(cantidad);
}

function ingresoExcursion(){
    const id =document.getElementById("nombreExcursion").value;
    let datosExcursion=excursiones.find(excursion => excursion.nroExcursion  === parseInt(id));
    if (datosExcursion === undefined){
        datosExcursion=msjeIdNovalido;
    }
    return(datosExcursion);
}

form.onclick = function(e){
    let menu ="EXCURSIONES\n";
    for (const excursion of excursiones){
        menu +=`  ID:${excursion.nroExcursion} - ${excursion.nombre} - $${excursion.precio}\n`;
    }
    menu+="Ingrese ID de excursion y cantidad de personas para saber el valor:"
    document.getElementById("actividades").innerHTML=menu;
}


btnValor.onclick = function(e){
    e.preventDefault();
    const datosExcursion=ingresoExcursion();
    const cantPersonas=ingresoCantPersonas();
    if (datosExcursion===msjeIdNovalido){
        document.getElementById('print').innerHTML=msjeIdNovalido;
    } else if (cantPersonas===msjeDatoNoValido) {
        document.getElementById('print').innerHTML=msjeDatoNoValido;
    }else{
        const valor=calculoPrecio(datosExcursion,cantPersonas);
        const msjeValor=`El valor de la excursion es de $${valor}`
        document.getElementById('print').innerHTML=msjeValor;
    } 
}

//cards de destinos 
/*function crearCardsExcursiones(){
    excursiones.forEach(element => {
        const nodo =document.createElement('div');
    });
}*/










  


