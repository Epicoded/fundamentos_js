var nombre = 'Eduardo', edad = 43

function imprimirEdad1(){ //las funciones sirven para reutilizar codigo
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()

function imprimirEdad(n, e){ //funcion con parametros
    console.log(`${n} tiene ${e} años`)
}
imprimirEdad(nombre, edad);
imprimirEdad('Vicky', 28);
imprimirEdad('Eric', 24);
imprimirEdad(25, 'Carlos');