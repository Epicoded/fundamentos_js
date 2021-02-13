/*
En esta clase estudiaremos una de las estructuras básicas de control. 
El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle,
y dentro las llaves irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.
*/

var eduardo = {
    nombre: 'Eduardo',
    apellido: 'Perez',
    edad: 43,
    peso:85
}

var juan = {
    nombre: 'Juan',
    apellido: 'Olmos',
    edad: 16,
    peso: 65
}

var raquel = {
    nombre: 'Raquel',
    apellido: 'Zaragosa',
    edad: 18,
    peso: 55
}

const numRandom = (numMax,numMin) => Math.round(Math.random()*(numMax-numMin)+numMin)
 numRandom(10,1) // numero aleatorio ente 10 y 1

console.log(`Al inicio del año ${eduardo.nombre} pesa ${eduardo.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (let i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random()

    if(random < 0.25) {
        aumentaDePeso(eduardo)
    } else if (random < 0.50) {
        adelgazar(eduardo)
    } 
}

console.log(`Al final del año ${eduardo.nombre} pesa ${eduardo.peso.toFixed(1)} kg`)