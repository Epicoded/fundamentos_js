var nombre = 'Eduardo'
// Si una variable no esta definida dentro del alcance  (scope) de una función se dice que es global
// La variable global se asigna al objeto global (window)
function imprimirNombreEnMayusculas1() {
    nombre = nombre.toUpperCase() //side effect ...quiere decir que la función afecta una variable fuera de la función
    console.log(nombre)
}

/* imprimirNombreEnMayusculas1() */

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase() //al incluir un parametro a la función  se evita el side effect que modifica la variable
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre) //al llamar la función se incluye la variable 
console.log(nombre)