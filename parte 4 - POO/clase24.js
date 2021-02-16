/*
La verdad oculta sobre las clases en JavaScript
Los objetos en JavaScript son “contenedores” dinámicos
de propiedades. Estos objetos poseen un enlace a un 
objeto prototipo. Cuando intentamos acceder a la 
propiedad de un objeto, la propiedad no sólo se 
busca en el propio objeto sino también en el 
prototipo del objeto, en el prototipo del prototipo, 
y así sucesivamente hasta que se encuentre una 
propiedad que coincida con el nombre o se alcance
el final de la cadena de prototipos.
*/

//Objeto con parametros

function heredaDe(prototipoHijo,prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

//se llama a un nuevo objeto y se incluyen los parametros
var eduardo = new Persona('Eduardo', 'Perez', 1.78)
var erika = new Desarrollador('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)