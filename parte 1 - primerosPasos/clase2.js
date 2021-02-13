var nombre= 'Eduardo' ,apellido = 'Perez';

var nombreEnMayusculas = nombre.toUpperCase(); //convertir a mayusculas
var apellidoEnMinusculas = nombre.toLowerCase(); //convertir a minusculas

var primeraLetraDelNombre = nombre.charAt(0); //traer la primera letra de un string
var cantidadDeLetrasDelNombre = nombre.length; //concoer la cantidad de digitos de un string

var nombreCompleto = nombre +' '+ apellido; //concatenar dos strings contenidos en variables
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`; //concatenar de otra forma

var str = nombre.substr(1,2); // extraer una porción del string

var lastWord = nombre.charAt(nombre.length - 1); // extraer la ultima letra

// la forma de declarar una variable nueva para que almacene  conversiones o modificaciones
// de otras variables se le llama Programación Progresiva
