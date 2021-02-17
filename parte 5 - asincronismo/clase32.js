/*
Para hacer el llamado a múltiples promesas, nos apoyamos en
 un array de ids con el que luego construimos otro arreglo de
 Promesas, que pasaremos como parámetro a 
 Promise.all( arregloDePromesas ), con las promesas podemos
 encadenar llamadas en paralelo, algo que no es posible usando
 callbacks.
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {

    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}
/* 
Con promises podemos hacer los requests en paralelo sin alterar
el orden de los objetos, lo que mejoraría mucho nuestro código
y performance.

Generamos un array con los ids de los personajes que queremos 
obtener. Y a partir de este vamos a generar otro array con 
múltiples promesas, donde cada elemento sea una promesa, la 
promesa de obtener un personaje con su id.
*/
var ids = [1, 2, 3, 4, 5, 6, 7]

/* 
Con el método map() vamos a recorrer el array ids y por cada
elemento de este vamos a generar uno nuevo que va a ser una 
promesa.

Estas promesas las guardamos en una variable ‘promesas’. A 
partir de cada objeto del array ids (de cada id) obtenemos 
una nueva promesa con la función _obtenerPersonaje(id).
*/
var promesas = ids.map(id => obtenerPersonaje(id))

/* 
podemos llamar a un método que tiene la clase de promesas
llamado 'Promise.all()'
A este le pasamos el array ‘promesas’, le encadenamos 
el .then() que nos entrega los objetos y depués encadenamos
el .catch() que se va a ejecutar si cualquiera de las promesas
que tenemos en el array falla.
*/

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


