/*
En esta clase aprenderemos que son los callbacks
 y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función
como un argumento. Esta función se invoca, después, 
dentro de la función externa para completar alguna acción.

Para esta clase se utilizó JQUERY de jquery.com seccion 
Downloads, se buscó la sección de "Using jQuery with a CDN"
lo que nos llevó a https://code.jquery.com de ahi se escoge
la última versión y la opción "minified" que nos brinda de
el código a integrar en el HTML

Para la API usamos https://swapi.dev/api/ ya que swapi.co ha
desaparecido

Manejando el Orden y el Asincronismo en JavaScript
Una manera de asegurar que se respete la secuencia en que hemos
realizado múltiples tareas es utilizando callbacks, con lo que
se ejecutará luego, en cada llamada. Lo importante es que el 
llamado al callback se haga a través de una función anónima. 
Sin embargo, al hacerlo de esta manera generamos una situación
poco deseada llamada CallbackHell.
*/


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`


    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)
    })

    if (callback){
        callback()
    }
}
//infierno de los callbacks
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})
