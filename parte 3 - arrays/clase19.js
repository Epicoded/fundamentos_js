/*
En esta clase veremos cómo transformar un array. El método map() itera sobre los
elementos de un array en el orden de inserción y devuelve array nuevo con los
elementos modificados.

Función Map
A diferencia de filter, la función Map nos devuelve un nuevo array que modifica a
todos los elementos del array original.

Para no planchar los valores del array original, es necesario retornar un nuevo objeto
desglosando al objeto original.
*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

/* const esAlta = persona => persona.altura > 1.8
const esBaja = persona => persona.altura <= 1.8

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
*/
const pasarAlturaCms = persona => ({ 
    ...persona,
    altura: persona.altura * 100
})

let personasCms = personas.map(pasarAlturaCms)

console.table(personasCms)

