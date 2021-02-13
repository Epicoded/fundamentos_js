/*
Los arrays son estructuras que nos permiten organizar elementos dentro de una collección.
Estos elementos pueden ser números, strings, booleanos, objetos, etc.

**Arrays ** son estructuras de datos que nos permiten agrupar datos dentro de una colección.

Para indicar que algo es un array utilizamos el símbolo "[ ]"
var personas = []

Dentro de los corchetes introducimos las variables que deseamos que contenga nuestro array, las variables pueden ser:
- Números
- Strings
- Objetos
- Funciones

Incluso podemos mezclar diferentes tipos de datos.

Si queremos acceder al 1er elemento de un array , escribimos el nombre del array seguido de los corchetes y el índice 0:

personas[0]

Si queremos acceder a los atributos de alguno de los elementos después del índice del elemento se agrega un “.” seguido del atributo:

personas[0].altura

Otra forma de acceder a los atributos es utilizando corchetes y el atributo pasarlo como un string:
personas[0].[‘altura’]

Se debe tomar en cuenta que estamos utilizando objetos, no colecciones, pero podemos acceder a los atributos.

NOTA: Los arrays como los strings tienen la propiedad length, indicándonos cuantos elementos contiene.

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

for (var i =0; i< personas.length; i++) {
    /* var persona = personas[i] */
    console.log(`${personas[i].nombre} mide ${personas[i].altura} mts`)
}
