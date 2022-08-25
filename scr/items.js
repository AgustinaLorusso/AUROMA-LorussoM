class Excursion{
    constructor(idExcursion,nombre,precio,imagen){
        this.id=idExcursion;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
}
//Arreglo de excursiones dentro de un array
export const excursiones=[
    new Excursion(1,"PARIS",1900,'./assets/paris.jpg'),
    new Excursion(2,"AMALFI COAST",2900,'./assets/amalfi coast.jpg'),
    new Excursion(3,"SANTORINI",3900,'./assets/santorini.jpg'),
]


