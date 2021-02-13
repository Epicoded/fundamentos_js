/*
En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir
el flujo de nuestro código.
Empezaremos con los condicionales. Los condicionales nos permiten decidir si un código 
se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, 
que determina si un valor es falso o verdadero. Mediante un condicional (if) decidiremos 
si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición. 
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