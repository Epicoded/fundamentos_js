/*
En esta clase seguiremos trabajando con condicionales para desglosar las funciones
en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. 
Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden
ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. 
Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.
*/

var eduardo = {
    nombre: 'Eduardo',
    apellido: 'Perez',
    edad: 43,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Olmos',
    edad: 16,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: true,
    guitarrista: true,
    drone: false
}

var raquel = {
    nombre: 'Raquel',
    apellido: 'Zaragosa',
    edad: 18,
    ingeniero: false,
    cocinero: true,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('no es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Drone')
    }
}

imprimirProfesiones(eduardo)

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.edad>= 18) { 
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

imprimirSiEsMayorDeEdad(eduardo)


const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(edad){
    return edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'
}

function imprimirSiEsMayorDeEdad2(persona) {
    return console.log(`${persona.nombre} es: ${esMayorDeEdad(persona.edad)} `)
}

imprimirSiEsMayorDeEdad2(eduardo)