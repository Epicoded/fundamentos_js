/*
Las clases de JavaScript son introducidas en el ECMAScript 2015
y son una mejora en la sintaxis sobre la herencia basada en 
prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o 
expresiones de clase para crear una clase que es hija de otra
 clase.

El método constructor es un método especial para crear e 
inicializar un objeto creado a partir de una clase.
*/

//Objeto con parametros

/* function heredaDe(prototipoHijo,prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
} */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    esAlto() {
        this.altura > 1.8
            ? console.log(`${this.nombre} ${this.apellido} es alto/a con ${this.altura} mts`)
            : console.log(`${this.nombre} ${this.apellido} es bajo/a con ${this.altura} mts`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

//se llama a un nuevo objeto y se incluyen los parametros
var eduardo = new Persona('Eduardo', 'Perez', 1.78)
var erika = new Desarrollador('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)