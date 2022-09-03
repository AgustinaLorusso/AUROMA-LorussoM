class Excursion{
    constructor(idExcursion,nombre,precio,imagen,info){
        this.id=idExcursion;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.info=info;
    }
}
//info de excursiones
const paris ='Disfrute de las vistas panorámicas de toda la ciudad a 115 m del suelo y admire los famosos enclaves parisinos, como Notre-Dame de París, el Sagrado Corazón o incluso el Arco del Triunfo. A través de su recorrido en ascensor acristalado,asombrate con este monumento histórico; una verdadera maravilla arquitectónica.'
const amalfi ='Zarpa hacia la idílica isla italiana de Capri en esta excursión de día completo, que incluye traslados de ida y vuelta en avión desde Nápoles o Sorrento. Viaje por la isla en minibús, disfrutando de las vistas a lo largo de la famosa carretera mamma mai. Detente a explorar las tiendas de artesanías de Anacapri y disfruta de la atmósfera en la bulliciosa La Piazzetta. Termine con una visita a la Gruta Azul y un paseo en funicular a Marina Grande.';
const suiza = 'Disfrute de la espectacular cima del monte Titlis en una excursión de día completo desde Zúrich. En primer lugar, explore el casco antiguo de Lucerna en un corto trayecto orientativo por la ciudad y, a continuación, explore por su cuenta. Viaje a Engelberg, un complejo situado junto a los Alpes suizos, y ascienda hasta la cima del monte Titlis para disfrutar de unas impresionantes vistas alpinas. Tome un telesilla para acercarse a las grietas congeladas y cruce el puente colgante más alto de Europa. Durante el invierno, opte por la opción superior, que incluye una opción de esquí.'
//Arreglo de excursiones dentro de un array
export const excursiones=[
    new Excursion(1,"PARIS",1900,'./assets/paris.jpg',paris),
    new Excursion(2,"AMALFI COAST",2900,'./assets/amalfi coast.jpg',amalfi),
    new Excursion(3,"SUIZA",3900,'./assets/suiza.jpg',suiza),
]





