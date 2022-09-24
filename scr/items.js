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
const santorini='Viva la experiencia de las coloridas playas de Santorini, lugares de buceo y aguas termales en un lujoso crucero al atardecer a bordo de un catamarán bien equipado. Su excursión por la tarde incluye barra libre de refrescos, cerveza y vino local con una barbacoa griega recién preparada. Después de una tarde tomando el sol y nadando, navegue hacia el pueblo de Oia, donde podrá disfrutar de una copa de vino de Santorini mientras el sol se pone en el mar Egeo.'
const estambul='Vea el amanecer sobre Capadocia con una experiencia en globo aerostático que incluye un vuelo de ida y vuelta desde Estambul hasta el aeropuerto internacional Erkilet/aeropuerto de Kayseri. Después de un vuelo por la mañana desde Estambul hasta Capadocia y de un desayuno en la plataforma de lanzamiento, se elevará por encima de las chimeneas, valles y formaciones rocosas de Capadocia, un paisaje que se encuentra entre los más espectaculares de Turquía. '
const venecia="Reserve con anticipación una experiencia esencial de Venecia en un paseo en góndola por el Gran Canal y vías fluviales más pequeñas y pintorescas. Evite negociar sobre el precio en el acto con esta opción compartida asequible que captura todo el romance y la atmósfera de la Ciudad flotante."
const lyon='Aprenderá todo sobre el Art de Vivre à la Lyonnaise y degustará especialidades locales en un ambiente agradable. Se le ofrecerán los mejores y más auténticos dulces y pasteles locales, una selección de quesos, así como un plato caliente tradicional lionés, asociado con degustaciones de vinos blancos y tintos de la región. Sabroso y generoso, no solo experimentará un recorrido gastronómico, sino también una aventura culinaria increíble y memorable.'
const mallorca='Navegue a bordo de un barco espacioso que está limitado a solo 12 personas a bordo. Te relajarás en cubierta mientras un patrón profesional te lleva a las serenas calas y bahías de Mallorca, en una ruta de 4 horas desde el puerto de Alcudia. El almuerzo y todas las bebidas se proporcionan a bordo, mientras que el esnórquel, la natación y el surf de remo brindan diversión en el agua.'
const barcelona='Conozca la profunda influencia de Gaudí en Barcelona durante un recorrido a pie que ofrece una visión más íntima de la capital de Cataluña. Ideal para quienes visitan por primera vez, este recorrido le ahorra la molestia de la navegación al guiarlo por la ciudad a pie. Además, verá íconos y puntos de referencia menos conocidos diseñados por Gaudi.'

//Arreglo de excursiones dentro de un array
export const excursiones=[
    new Excursion(1,"TOUR POR PARIS",1900,'./assets/paris.jpg',paris),
    new Excursion(2,"NAVEGAR POR AMALFI COAST",2900,'./assets/amalfi coast.jpg',amalfi),
    new Excursion(3," ESQUIAR EN SUIZA",3900,'./assets/suiza.jpg',suiza),
    new Excursion(4,"DIA DE YATE EN SANTORINI",4900,'./assets/santorini.jpg',santorini),
    new Excursion(5,"VIAJE EN GLOBO EN ESTAMBUL",5900,'./assets/estambul.jpg',estambul),
    new Excursion(6,"BARCO EN VENECIA",6900,'./assets/venecia.jpg',venecia),
    new Excursion(7,"GASTRONOMIA EN LYON",5900,'./assets/berlin.jpg',lyon),
    new Excursion(8,"DIA DE PLAYA MALLORCA",5900,'./assets/mallorca.jpg',mallorca),
    new Excursion(9,"TOUR POR BARCELONA",8900,'./assets/barcelona.jpg',barcelona)
]



    
    
    

