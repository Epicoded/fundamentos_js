/*
En JavaScript, los parámetros de funciones son por defecto
undefined. De todos modos, en algunas situaciones puede ser
útil colocar un valor por defecto diferente que lo evalúe 
como verdadero


Valores falsy (valores falsos) en Javascript:
false
0
null
""
undefined
NaN

Los demás son valores Truthy (valores verdaderos)
*/

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
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
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}

var eduardo = new Persona('Eduardo', 'Perez', 1.78)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)

eduardo.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)