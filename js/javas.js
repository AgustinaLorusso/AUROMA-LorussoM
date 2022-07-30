
//Funcion que muestra mensaje de valor total de excursion,actividades y cantidad de personas y luego el valor total de compra.
function productos(){
    let aniadir="si";
    let total=0;
    while (aniadir==="si"){
        let elegirProd=validarP();
        let cantProd=validarC();
        let valor=calcularvalor(elegirProd,cantProd);
        let actividad=nombreExcursion(elegirProd);
        total=total+valor;
        alert("Actividad: "+actividad+"\nCantidad de personas: "+cantProd+"\nValor total de la excursion: "+valor);
        aniadir=validarA();
    }
    alert("Valor total compra: "+total);
}
//Funcion que pide el ingreso de la excursion elegida y valida ese dato.
function validarP(){
    let producto=prompt("Ingrese la letra de la excursion deseada\n A = Caminata por el glaciar Perito Moreno\n B = Kiteboarding en Italia\n C = Esqui en Bulgaria");
    producto=producto.toLowerCase();
    while ((producto!="a")&&(producto!="b")&&(producto!="c")){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        producto=prompt("Ingrese la letra del producto deseado");
    }
    return(producto);
}
//Funcion que pide la cantidad de personas a asistir a excursion y valida el dato
function validarC(){
    let cantidad=prompt("Ingrese cantidad de personas que asistiran a la actividad");
    while ((cantidad=="")||((isNaN(cantidad)==true))){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        cantidad=prompt("Ingrese cantidad de personas que asistiran a la actividad");
    }
    return((parseInt(cantidad)));
}
//  Funcion que calcula el valor de cada excursion segun la cantidad de personas que asistiran

function calcularvalor(letra,numero){
    let valor=0;
    switch(letra){
        case "a":
            valor=1900*numero;
            break;
        case "b":
            valor=2900*numero;
            break;
        case "c":
            valor=3900*numero;
            break;
    }
    return(valor);
}
//Funcion que relaciona las letras con las excursiones dadas y retorna el nombre de la excursion
function nombreExcursion(letra){
    let nombre="";
    switch(letra){
        case "a":
            nombre="Caminata por el glaciar Perito Moreno";
            break;
        case "b":
            nombre="Kiteboarding en Italia";
            break;
        case "c":
            nombre="Esqui en Bulgaria";
            break;
    }
    return(nombre);
}
//Funcion que se encargara de preguntar al usuario si va a seguir con otra compra  o quiere terminar 
function validarA(){
    let continuar=prompt("Para añadir otra excursion ingrese SI, si quiere terminar ingrese NO");
    continuar=continuar.toLowerCase();
    while ((continuar!="si")&&(continuar!="no")){
        alert("El dato ingresado no es valido, Ingrese nuevamente");
        continuar=prompt("Para añadir otra excursion ingrese SI, si quiere terminar ingrese NO");
        continuar=continuar.toLowerCase();
    }
    return(continuar);
}
//Llamo a la funcion productos
productos()
