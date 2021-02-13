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

function imprimirNombreEnMayusculas(persona) {
     // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
  }

/* imprimirNombreEnMayusculas(eduardo)
imprimirNombreEnMayusculas(dario) */
//imprimirNombreEnMayusculas({nombre : 'Pepito'})
/* imprimirNombreEnMayusculas() */

function imprimirNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
    // Hola, me llamo Sacha y tengo 28 años
    // Hola, me llamo Darío y tengo 27 años
  }

 /*  imprimirNombreYEdad(eduardo)
  imprimirNombreYEdad(dario) */

  function cumpleanos(persona){
    return {
      ...persona,
      edad: persona.edad +1
    }
  }