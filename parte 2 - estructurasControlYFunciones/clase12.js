/*
En esta clase aprenderemos a utilizar Arrow Functions que permiten 
una nomenclatura más corta para escribir expresiones de funciones. 
Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra 
function, la palabra return, ni las llaves.
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

function esMayorDeEdad2(edad){
    return edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'
} //funcion tradicional

var esMayorDeEdad3 = function (edad){
    return edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'
} //al asignar a una variable una funcion, se le llama funcion anonima por que no tiene nombre

/*
Para convertir una funcion anonima en una arrow fuction:

1. se puede eliminar la palabra function y añadir => lo que la convierte en una arrow function

    var esMayorDeEdad3 = (edad) => {
        return edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'
    } 

2. pueden obviarse los parentesis del parametro edad

    var esMayorDeEdad3 = edad => {
        return edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'
    } 

3. si la función solamente hace return a algo, se pueden eliminar las llaves y el return 

    var esMayorDeEdad3 = edad => edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'

4. para desestructurar el objeto y llegar al dato que nos interese analizar se pueden inlcuir las llaves
pero no se pueden incluir solas, deben ir entre parentesis para la desestructura del objeto

    var esMayorDeEdad3 = ({edad}) => edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'

Nota las arrow fuction siempre deben ser declaradas antes de ser ejecutadas a diferencia de las fuction
recordemos que los Scopes elevan solamente las declaraciones de variables y de function.
*/

// Arrow function
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD ? 'mayor de edad' : 'menor de edad'

function imprimirSiEsMayorDeEdad2(persona) {
    return console.log(`${persona.nombre} es: ${esMayorDeEdad(persona)} `)
}

imprimirSiEsMayorDeEdad2(eduardo)

/*
Operador de negación
 Sirve para indicar el valor opuesto de un dato por ejemplo si  a= true al incluir !a seria false
*/

