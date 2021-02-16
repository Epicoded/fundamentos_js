/*
En esta clase aprenderemos que son los callbacks
 y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función
como un argumento. Esta función se invoca, después, 
dentro de la función externa para completar alguna acción.
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}

$.get(lukeUrl,opts, function() {
    console.log(arguments)
})