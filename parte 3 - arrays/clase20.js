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
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}
const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

/* var acum = 0

for(var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
} */

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros `)

