
//Clase que tiene como atributo el nombre,precio y numero asociados a la excursion.
class Excursion{
    constructor(nombre,precio,nroExcursion){
        this.nombre=nombre;
        this.precio=precio;
        this.nroExcursion=nroExcursion;
    }
}

class Reserva{
    constructor(numero,nombre,precioTotal){
        this.numero=numero;
        this.nombre=nombre;
        this.precioTotal=precioTotal;
    }
}
//Arreglo de excursiones dentro de un array
const excursiones=[
    new Excursion("caminata por el perito moreno",1900,1),
    new Excursion("kiteboarding en italia",2900,2),
    new Excursion("esqui por bulgaria",3900,3),
]


//mensajes usados en el programa
const msjeDatoNoValido="El dato ingresado no es valido.\n Intentelo nuevamente";
const msjeIngCantPersonas="Ingrese cantidad de personas que asistiran a la actividad";
const msjeContinuarCompra="Para añadir otra excursion ingrese SI, si quiere terminar ingrese NO";
const msjeEliminarDeCarrito=' Quiere eliminar algo del carrito?\n Ingrese SI/NO:';

//Funcion que muestra mensaje de valor total de excursion,actividades y cantidad de personas y luego el valor total de compra
function menuPrincipal(){
    let continuar="si";
    let checkout='';
    const reservas=[];
    let cont=1;
    while (continuar ==="si"){
        const datosExcursion=ingresoExcursion();
        const cantPersonas=ingresoCantPersonas();
        const precio=calculoPrecio(datosExcursion,cantPersonas);
        //lista con las excursiones elegidas
        reservas.push(new Reserva(cont,datosExcursion.nombre,precio));
        let verReserva=`Actividad: ${datosExcursion.nombre}\nCantidad de personas: ${cantPersonas}\nValor total de la excursion: ${precio}`;
        alert(verReserva);
        continuar=validarIngreso(msjeContinuarCompra);
        cont=cont+1;
    }
    let eliminarDeCarrito='CHECKOUT\n';
    for (const reserva of reservas){
        checkout+=`${reserva.numero} - ${reserva.nombre} - $${reserva.precioTotal}\n`;
    }
    eliminarDeCarrito+= `${checkout} ${msjeEliminarDeCarrito}`;
    let carrito=validarIngreso(eliminarDeCarrito);
    while (carrito==="si"){
        let posicion=posicionAEliminar(checkout,reservas);
        reservas.splice((posicion-1),1);
        checkout='CHECKOUT\n';
        for (const reserva of reservas){
            checkout+=`${reserva.numero} - ${reserva.nombre} - $${reserva.precioTotal}\n`;
        }
        eliminarDeCarrito=`${checkout} ${msjeEliminarDeCarrito}`
        carrito=validarIngreso(eliminarDeCarrito);
    }
    total=valorTotal(reservas);
    checkout='COMPRA FINAL\n';
        for (const reserva of reservas){
            checkout+=`${reserva.numero} - ${reserva.nombre} - $${reserva.precioTotal}\n`;
        }
    checkout+=`Valor total compra:${total}`;
    alert(checkout);
}

//Funcion que muestra el menu de excursiones,pide ingreso de excursion elegida y valida ese dato.
function ingresoExcursion(){
    //Variable menu encargada de mostrar las excursiones disponibles.
    let menu ="EXCURSIONES\n";
    for (const excursion of excursiones){
        menu +=`${excursion.nroExcursion} - ${excursion.nombre} - $${excursion.precio}\n`;
    }
    menu+="Ingrese el numero de la excursion elegida:";
    let nroActividad= parseInt(prompt(menu));
    //Busca si el numero esta en arreglo de excursiones.
    let datosExcursion=undefined;
     while (datosExcursion === undefined){
        datosExcursion= excursiones.find(excursion => excursion.nroExcursion === nroActividad);
        if (datosExcursion === undefined){ 
            alert(msjeDatoNoValido);
            nroActividad= parseInt(prompt(menu))};
    }
    return(datosExcursion);
}

//Funcion que pide la cantidad de personas a asistir a excursion y valida el dato.
function ingresoCantPersonas(){
    let cantidad=prompt(msjeIngCantPersonas);
    cantidad=cantidad.trim();
    while (cantidad==""||isNaN(cantidad)|| cantidad<=0){
        alert(msjeDatoNoValido);
        cantidad=prompt(msjeIngCantPersonas);
    }
    return(parseInt(cantidad));
}

//  Funcion que calcula el valor de cada excursion segun la cantidad de personas que asistiran
function calculoPrecio(datos,numero){
    return(datos.precio*numero);
}

//funcion que suma cada valor de las excursiones
function valorTotal(reservas){
    let valorTotal=0;
    for (const reserva of reservas){
        valorTotal=reserva.precioTotal+valorTotal
    }
    return(valorTotal);
}

//Funcion que pregunta si se quiere eliminar algo del carrito y verifica los datos.
function validarIngreso(mensaje){
    ingreso=prompt(mensaje);
    ingreso=ingreso.toLocaleLowerCase();
    while (ingreso!="si" && ingreso!="no"){
        alert(msjeDatoNoValido);
        ingreso=prompt(mensaje);
    } 
    return(ingreso);
}

//Funcion que devuelve la posicion en la lista del objecto que se quiere eliminar
function posicionAEliminar(objetos,lista){
    let posicion=parseInt(prompt(`Ingrese el numero de la excursion a eliminar:\n ${objetos}`));
    let nroEliminar=lista.find( reserva => reserva.numero === posicion);
    while (nroEliminar === undefined){
        alert(msjeDatoNoValido);
        posicion=parseInt(prompt(`Ingrese el numero de la excursion a eliminar:\n ${objetos}`));
    }

    return(posicion);
}

//Llamo a la funcion menu Principal
menuPrincipal()


