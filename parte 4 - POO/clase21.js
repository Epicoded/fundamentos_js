/*
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this 
depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.
*/

/* function Persona() {
    console.log('Me ejecutaron')
}

var eduardo = new Persona() */ //la palabra reservada new crea un nuevo objeto y se le asigna el prototipo


//Objeto con parametros
function Persona(nombre, apellido, altura) { 
    this.altura = altura
    this.nombre = nombre
    this.apellido = apellido
    return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function () {
    this.altura > 1.8 
        ? console.log(`${this.nombre} ${this.apellido} mide alto con ${this.altura} mts`)
        : console.log(`${this.nombre} ${this.apellido} mide bajo con ${this.altura} mts`)
}

//se llama a un nuevo objeto y se incluyen los parametros
var eduardo = new Persona('Eduardo', 'Perez', 1.78)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.85)

eduardo.saludar()
erika.esAlto()
arturo.esAlto()