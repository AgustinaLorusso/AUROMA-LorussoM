
//Clase que tiene como atributo el nombre,precio y numero asociados a la excursion.
class Excursiones{
    constructor(nombre,precio,nroExcursion){
        this.nombre=nombre;
        this.precio=precio;
        this.nroExcursion=nroExcursion;
    }
}
//Arreglo de excursiones
const excursion1= new Excursiones("caminata por el perito moreno",1900,1);
const excursion2= new Excursiones("kiteboarding en italia",2900,2);
const excursion3=new Excursiones("esqui por bulgaria",3900,3);

//Funcion que muestra mensaje de valor total de excursion,actividades y cantidad de personas y luego el valor total de compra
function menuPrincipal(){
    let continuar="si";
    //array de excursiones disponibles
    const listaExcursiones=["caminata por el perito moreno","kiteboarding en italia","esqui por bulgaria"];
    //Array de lista de excursiones q elije el usuario y lista de sus precios correspondientes
    const excursionesElegidas=[];
    const listaPrecios=[];
    while (continuar ==="si"){
        const elegirExcursion=ingresoExcursion();
        const cantPersonas=ingresoCantPersonas();
        const precio=calculoPrecio(elegirExcursion,cantPersonas);
        const actividad=listaExcursiones[elegirExcursion-1];
        excursionesElegidas.push(actividad);
        listaPrecios.push(precio);
        alert("Actividad: "+actividad+"\nCantidad de personas: "+ cantPersonas +"\nValor total de la excursion: "+ precio);
        continuar=ingresoContinuar();
    }
    let total=valortotal(listaPrecios);
    let carrito=eliminarDeCarrito(excursionesElegidas,total);
    while (carrito==="si"){
        const posicion=posicionAEliminar(excursionesElegidas);
        //elimino de la lista de excursiones y lista de precios con la posicion.
        excursionesElegidas.splice(posicion,1);
        listaPrecios.splice(posicion,1);
        total=valortotal(listaPrecios);
        carrito=eliminarDeCarrito(excursionesElegidas,total);
    }
    alert("COMPRA FINAL\n"+"Excursiones:\n"+ excursionesElegidas.join("\n")+"\n"+"Valor total compra:" +total);


}
//Funcion que pide el ingreso de la excursion elegida y valida ese dato.
function ingresoExcursion(){
    //Uso la clase Excursiones para mostrar las distintas actividades y su precio.
    const menu =("EXCURSIONES\n"+"1."+excursion1["nombre"]+"  Precio:"+excursion1["precio"]+"\n"+"2."+excursion2["nombre"]+"  Precio:"+excursion2["precio"]+"\n"
    +"3."+excursion3["nombre"]+"  Precio:"+excursion3["precio"])
    alert(menu)
    let actividades = prompt("Ingrese el numero de la excursion deseada:\n Ingrese enter para ver nuevamente el menu.")
    while (actividades===""){
        alert(menu);
    actividades = prompt("Ingrese el numero de la excursion deseada:\n Ingrese enter para ver nuevamente el menu.");
    }
    actividades=parseInt(actividades);
    while (actividades!=1 && actividades!=2 && actividades!=3){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        actividades = prompt("Ingrese el numero de la excursion deseada:\n Ingrese enter para ver nuevamente el menu.");
    }
    return(actividades);
}
//Funcion que pide la cantidad de personas a asistir a excursion y valida el dato
function ingresoCantPersonas(){
    let cantidad=prompt("Ingrese cantidad de personas que asistiran a la actividad");
    while (cantidad==""||isNaN(cantidad)|| cantidad<=0){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        cantidad=prompt("Ingrese cantidad de personas que asistiran a la actividad");
    }
    return(parseInt(cantidad));
}
//  Funcion que calcula el valor de cada excursion segun la cantidad de personas que asistiran
function calculoPrecio(nroExcursion,numero){
    let valor=0;
    switch(nroExcursion){
        case  1:
            valor=excursion1["precio"]*numero;
            break;
        case 2:
            valor=excursion2["precio"]*numero;
            break;
        case 3:
            valor=excursion3["precio"]*numero;
            break;
    }
    return(valor);
}

//Funcion que se encargara de preguntar al usuario si va a seguir con otra compra  o quiere terminar 
function ingresoContinuar(){
    let continuar=prompt("Para añadir otra excursion ingrese SI, si quiere terminar ingrese NO");
    continuar=continuar.toLowerCase();
    while ((continuar!="si")&&(continuar!="no")){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        continuar=prompt("Para añadir otra excursion ingrese SI, si quiere terminar ingrese NO");
        continuar=continuar.toLowerCase();
    }
    return(continuar);
}
//funcion que suma cada valor de la lista
function valortotal(lista){
    let total=0
    for (let i= 0 ; i< lista.length;i++){
        const valor=lista[i];
        total=valor+total;
    }
    return(total)
}
//Funcion que pregunta si se quiere eliminar algo del carrito y verifica los datos.
function eliminarDeCarrito(lista1,valor){
    eliminar=prompt("Excursiones:\n"+ lista1.join("\n")+"\n"+"Valor total compra:" +valor+"\n"+"Quiere eliminar algo del carrito?\n"+"Ingrese SI/NO");
    eliminar.toLocaleLowerCase();
    while (eliminar!="si" && eliminar!="no"){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        eliminar=prompt("Excursiones:\n"+ lista1.join("\n")+"\n"+"Valor total compra:" +valor+"\n"+"Quiere eliminar algo del carrito?\n"+"Ingrese SI/NO");
    } 
    return(eliminar);
}
//Funcion que devuelve la posicion en la lista del objecto que se quiere eliminar
function posicionAEliminar(lista1){
    let eliminar=prompt("Ingrese nombre de excursion a eliminar:\n"+lista1.join("\n"));
    eliminar.toLocaleLowerCase();
    let posicion=lista1.indexOf(eliminar);
    alert(posicion)
    while (posicion===-1){
        alert(posicion);
        alert("El dato ingresado no corresponde a ninguna excursion\n Ingrese nuevamente")
        eliminar=prompt("Ingrese nombre de excursion a eliminar:\n"+lista1.join("\n"));
        posicion=lista1.indexOf(eliminar); 
    }
    
    return(posicion);
}

//Llamo a la funcion menu Principal
menuPrincipal()


