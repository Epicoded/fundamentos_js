var x = 4, y = '4'

/* 
en Datos primitivos
el comparativo == se hace en relacion al dato
el comparativo === incluye el tipo de dato en la comparacion

Al comparar objetos, los comparativos se realizan en relación a la ubicación
de memoria donde se encuentran ubicados
*/

var eduardo = {
    nombre: 'Eduardo'
}

var otraPersona = {
    nombre: 'Eduardo'
}

var otraPersona2 = eduardo 
//en este caso al comparar otraPersona2 == eduardo deberá dar true por que son el mismo objeto en RAM

var otraPersona3 = {
    ...eduardo
}

/*
 la otraPersona3 crea un nuevo objeto en referencia a otro objeto por ello al compararlo responde False
*/