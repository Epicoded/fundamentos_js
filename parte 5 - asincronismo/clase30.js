/*

==Promesas==
En esta clase veremos las promesas, que son valores que 
un no conocemos. Las promesas tienen tres estados:

pending
fullfilled
rejected
Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )

Con los callBacks teníamos un problema al anidarlos.
Para este problema existen las ‘promesas’.

Antes era necesario usar librerías externas pero ahora
la mayoría de los browsers soportan las promesas.
Si queremos verificar si las promesas son soportadas por
el usuario se podría usar lo que se llama un ‘polifield’.
Este detecta si el navegador donde está corriendo nuestro
código no soporta las promesas, y si así es, crea las 
clases de las promesas por nosotros y así podrían ser 
utilizadas por nosotros de manera transparente para nuestro
código.

Qué son las promesas?
Tenemos que pensar las promesas como valores que aún no
conocemos. Es la promesa de que ahí va a haber un valor
cuando una acción asíncrona suceda y se devuelva.

Las promesas tienen 3 estados y son como cualquier otro 
objeto de javascript.

El primero de los estados es ‘pending’. Es el estado cuando
las creamos.
Si se resuelve exitosamente pasa al estado ‘fulfilled’.
Si ocurre algún error y no se resuelve pasa al estado 
de ‘rejected’.

Las promesas pueden no ser asíncronas también.

Para obtener el valor de la resolución de la promesa llamamos
a la función _.then(val =>) _a la que le vamos a pasar como 
parámetro otra función en la que el primer parámetro será el 
valor que esperábamos.

Si sucede algún error agregamos el método .catch(err=>) al que
se le asigna una función también como parámetro que va a recibir
el error.

Las promesas se declaran de la siguiente manera:

new Promise( function( resolve, reject ) {
    ...
}).then( valor => {
    ...
}).catch( err => {
    ...
})

*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    /* 
    Se crea el nuevo objeto y se le asigna una función con dos parámetros
    ‘resolve’ y ‘reject’. Estas son dos funciones que debemos llamar 
    si la promesa se resuelve o no. 
     */
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
Si se resuelve exitosamente llamamos a ‘.then(valor =>’ para obtener
el valor del promise dentro del arrow function (valor=>). 
Si sucede algún error podemos llamar al ‘.catch( err =>’ para obtener 
el tipo de error que sucedió y actuar en consecuencia. 
*/
obtenerPersonaje(1)
.then(personaje => console.log(`El personaje 1 es ${personaje.name}`))
.catch(onError)

/* 
Otra cosa más a cerca de las promesas es que luego de llegar al estado 
de 'fulfilled’ podemos retornar otra promesa dentro del .then y de esa 
manera ir encadenándolas en sucesivas acciones asíncronas. Cada una de 
ellas puede ser resuelta o rechazada en una nueva promesa que terminará 
en el estado de ‘fulfilled’.
*/