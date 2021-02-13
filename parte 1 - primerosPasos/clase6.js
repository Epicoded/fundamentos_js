var eduardo = {
    nombre: 'Eduardo',
    apellido: 'Perez',
    edad: 43,
} 

var dario = {
    nombre: 'Dario',
    apellido: 'Sanchez',
    edad: 27,
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(eduardo)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre : 'Pepito'})
/* imprimirNombreEnMayusculas() */