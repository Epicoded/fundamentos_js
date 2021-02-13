/*
En esta clase estudiaremos otra estructura repetitiva llamada while.
While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos.
En caso de que quieras verificar tu código, debes utilizar un debugger. 
El código se detiene cada vez que lee esta palabra.
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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = eduardo.peso - 3
var dias = 0

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (eduardo.peso > META) {
    if (comeMucho()) {
        aumentaDePeso(eduardo)
    }
    if (realizaDeporte) {
        adelgazar(eduardo)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${eduardo.nombre} adelgazó 3 kilos`)