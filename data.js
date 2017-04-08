function Usuario(mail, nombre, popularidad, foto) {
    this.mail = mail;
    this.nombre = nombre;
    this.popularidad = popularidad;
    this.foto = foto;
    this.recetas = [];
}

function Receta(nombre, tipo, descripción, proceso, fecha, likes) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripción = descripción;
    this.ingredientes = [];
    this.proceso = proceso;
    this.fecha = new Date(fecha);
    this.likes = likes;
    this.fotos = [];
}

var TIPO_RECETA = {
    ENSALADA: "Ensaladas",
    PRIMERO: "Primeros",
    SEGUNDO: "Segundos",
    POSTRE: "Postres"
};

var usuarios = [];

var adrian = new Usuario("adrian@urjc.com", "Adrián Ortiz Gutierrez", 50, "images/adrian@urjc.com.jpeg");
var tartaChocolate = new Receta("tarta de tres chocolates", TIPO_RECETA.POSTRE, "La tarta tres chocolates o tarta de triple chocolate es cada vez más popular gracias a su inmejorable presentación. Es perfecta para cumpleaños y celebraciones.",
    "Para hacer la base, tritura las galletas, échalas en un bol y añade un chorro de leche y la mantequilla fundida. Mézclalo bien hasta que quede una masa homogénea. Coloca la masa en el fondo de un molde desmontable y presiona con una cuchara para que quede compacta. Reserva.\
Para hacer la crema de chocolate negro, mezcla 250 ml de leche y 250 ml de nata. Separa 100 ml de esta mezcla, echa un sobre de cuajada y reserva.\
Pon la mezcla de leche y nata a fuego medio y añade el chocolate negro y 50 gr de azúcar. Remueve hasta que rompa a hervir y retira del fuego.\
Agrega la otra parte de la mezcla con el sobre de cuajada disuelto y pon a fuego medio removiendo constantemente. Cuando rompa a hervir, retira del fuego y vierte la mezcla en el molde, sobre la base de galletas.\
Para hacer la capa de chocolate con leche, repite el proceso pero añade 25 gr de azúcar en lugar de 50 gr. Cuando tengas la crema hecha, viértela lentamente en el molde sobre la capa de chocolate negro y reserva.\
La capa de chocolate blanco se hace igual que las anteriores, pero sin azúcar. Vierte la mezcla en el molde y deja enfriar para que cuaje y no se mezclen las capas.\
Cuando se haya enfriado, guarda en el frigorífico durante 3-4 horas (si se guarda toda la noche, mejor). Desmolda y sirve la tarta tres chocolates. Si lo deseas, puedes decorarla con sirope, fideos de chocolate, figuras de chocolate...", 1491647288);
tartaChocolate.fotos.push("images/tarta-tres-chocolates.jpeg");
tartaChocolate.ingredientes.push("150 gr de chocolate negro");
tartaChocolate.ingredientes.push("150 gr de chocolate con leche");
tartaChocolate.ingredientes.push("150 gr de chocolate blanco");
tartaChocolate.ingredientes.push("750 ml de nata líquida");
tartaChocolate.ingredientes.push("750 ml de leche");
tartaChocolate.ingredientes.push("3 sobres de cuajada");
tartaChocolate.ingredientes.push("75 gr de azúcar (opcional)");
tartaChocolate.ingredientes.push("1 paquete de galletas");
tartaChocolate.ingredientes.push("60 gr de mantequilla");
tartaChocolate.ingredientes.push("un chorro de leche");

var cocido = new Receta("cocido", TIPO_RECETA.SEGUNDO, "El cocido madrileño es uno de los platos más conocidos y con más tradición de la gastronomía española, y es un plato que tienen mucho en común con otros cocidos diferentes que se preparan en todo el país, cada uno con sus particularidades y sus ingredientes especiales.\n\
El cocido madrileño y otros cocidos, como el cocido andaluz o el cocido lebaniego entre otros, es un tipo de guiso que requiere bastante tiempo de preparación, y los ingredientes que los conforman aportan bastantes calorías a nuestro cuerpo, lo que lo hacen un plato ideal para almorzasr en épocas de más frío.", "El cocido madrileño es una de esas recetas que tiene una gran tradición en nuestra gastronomía, se prepara desde hace muchísimos años, por lo que como suele ocurrir en estos casos, en cada casa se prepara con algunas posibles variantes, lo que hace como receta tradicional se puedan encontrar diferentes recetas, aunque siempre la base del plato es la misma. Es un cocido que se diferencia de otros cocidos porque se come entre partes, primero la sopa del caldo con fideos, después los garbanzos con la verdura, y por último la carne, que a veces se sirve sola o acompañada. Vamos ya con la receta.\
        La noche antes de preparar el cocido madrileño hay que dejar en remojo los garbanzos que vayamos a emplear, que pueden ser del tipo que más os guste.Nosotros empleamos unos garbanzos de tamaño pequeño, que nos gustan más.Otra opción es emplear garbanzos de bote, pero sin duda es mejor que los dejemos en remojo nosotros mismos.En unas 12 horas los garbanzos estarán ya listos para usar, así que los vamos a escurrir bien.También vamos a lavar bien bajo el grifo los huesos y las carnes que vamos a emplear en la receta, para quitarles la toda la suciedad que pudieran tener.El pollo o gallina que se emplea puede ser o bien su carcasa y una pechuga o bien un cuarto superior entero, como os sea más cómodo.\
        Colocamos toda la carne y los huesos en la olla donde vayamos a preparar el cocido madrileño y cubrimos los mismos con agua fría, y ponemos a calentar.La olla puede ser una de las tradicionales o bien una olla exprés, en ambos casos la preparación es similar, salvo que en la primera el proceso durará varias horas y se hace a fuego lento, como se ha hecho siempre, y en la segunda se hace mucho más rápido.Si tienes tiempo, lo aconsejable es hacerlo en una olla normal, pero si tienes prisa, mejor usar una olla exprés, pero como siempre, lo dejamos a tu elección.\n\
        Cuando el agua comience a hervir bajamos un poco la intensidad del fuego, para evitar que los borbotones salgan de la olla, y vamos quitando la espuma que se irá acumulando arriba, con ayuda de una espumadera.Mientras tanto vamos a echar los garbanzos escurridos, en una red de cocina si tenemos, o bien directamente a la olla.Hay que dejar los garbanzos tiernos, pero sin llegar a hacerlos del todo, lo que llevará unas dos horas aproximadamente en olla normal y unos 15 - 20 minutos en olla exprés, siempre dependiendo de los garbanzos y de la potencia que usemos.\
        En ese momento sacamos los huesos y agregamos a la olla el repollo cortado en dos trozos, o entero si es pequeño, el puerro bien lavado, sólo la parte blanca, y las patatas y las zanahorias lavadas y peladas, y troceadas si son grandes.Al mismo tiempo vamos a poner en una olla más pequeña a cocer el chorizo y la morcilla, a los que haremos antes unos pinchazos repartidos, para que además se desgrasen bien y la grasa no nos quede junto al cocido.El caldo debe cubrir bien todos los ingredientes, si no fuera así agregamos un poco más de agua, pero mejor que esté caliente, para no bajar la temperatura de la que están en la olla.\
        Cocinamos otros 30 - 40 minutos más o menos, tras los cuales vamos a sacar el caldo para servirlo como primer plato, colándolo para dejarlo bien limpio para filtrar los posibles trozos de hueso y otros que hayan podido quedar.Corregimos el punto de sal antes de separar el caldo, por si hiciera falta.Ese caldo lo dejamos en otra olla para calentarlo más adelante.El chorizo y la morcilla, si la hemos usado, ya estarán bien desengrasados, así que los escurrimos bien y los agregamos a la olla principal, con el resto de ingredientes, y los mantenemos ahí hasta acabar de cocinar las verduras, carnes y garbanzos, que comprobaremos que están todos bien hechos.\
        Y pasamos ya a servir el cocido madrileño, lo cual haremos en tres veces.El primer plato se prepara calentando el caldo que habíamos separado y agregando fideos, y se sirven una vez se hayan cocido.El segundo plato lo prepararemos sirviendo los garbanzos acompañados con las verduras troceadas, todo servido en una bandeja para que cada comensal se sirva, o bien ya repartido en platos individuales.Se suelen aliñar con un poco de aceite y vinagre.Y el tercer plato se sirve apartando una mezcla de la carne, panceta, chorizo y morcilla, todo previamente bien troceado en trozos que deben ser más bien grandes.Como verás es una receta que mezcla buenos ingredientes y con la que hacer un almuerzo muy completo.\
        ", 1491667288);
cocido.fotos.push("images/cocido.jpeg");
cocido.ingredientes.push("500 gramos de garbanzos");
cocido.ingredientes.push("600 gramos de morcillo o jarrete de ternera");
cocido.ingredientes.push("300 gramos de falda de ternera");
cocido.ingredientes.push("Un cuarto superior de gallina o pollo");
cocido.ingredientes.push("Un chorizo");
cocido.ingredientes.push("Una morcilla (Opcional)");
cocido.ingredientes.push("Un buen trozo de panceta fresca");
cocido.ingredientes.push("Medio repollo grande o uno pequeño");
cocido.ingredientes.push("Uno o dos puerros");
cocido.ingredientes.push("Tres o cuatro zanahorias");
cocido.ingredientes.push("Tres o cuatro patatas");
cocido.ingredientes.push("Un hueso de jamón");
cocido.ingredientes.push("Un hueso de rodilla de ternera");
cocido.ingredientes.push("Un hueso de espinazo salado");
cocido.ingredientes.push("Un hueso de caña blanco");
cocido.ingredientes.push("Sal");
cocido.ingredientes.push("Fideos");

adrian.recetas.push(cocido);
usuarios.push(adrian);

var maria = new Usuario("maria@urjc.com", "María Cruz Gutiérrez", 100, "images/maria@urjc.es.jpeg");
usuarios.push(maria);