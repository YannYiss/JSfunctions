/*Hacer una función que convierta de grados centígrados a Farenheit.*/

function conversion(celsius) {
    var farenheit = (celsius * 1.8) + 32;
    return farenheit
}

do {
    var celsius = prompt("Ingresa los grados Centigrados que deseas convertir");
    if (celsius != ""){
        console.log(`${celsius}°C equivalen a ${conversion(celsius)}°F`);
    }
    else {
        alert("No se ha ingresado ningun valor");
    }
} while (celsius != "");

/*Hacer una función que muestre la tabla de multiplicar de un número*/

function tabla(num) {
    for (var i = 0; i < 10; i++) {
        var multiplicacion = num * i
        console.log(multiplicacion);
    }
}

do {
    var num = prompt("Ingrsa el numero a multiplicar");
    if (num != "") {
        console.log(tabla(num));
    }
    else {
        alert("No se ha ingresado ningun valor");
    }
} while (num != "");

/*Escribe una función que imprima todos los números naturales de 1 hasta n (el usuario elige n)*/

function naturales(num) {

    if (input != "") {
        for (var i = 0; i<= input; i++) {
            console.log(i);
        }
    }
    else {
        alert("Ingresa un valor valido");
    }
}

var input = prompt("Ingresa un numero");
console.log(naturales(input));

/*Escribe una función que imprima todos los números naturales en reversa, desde n (el usuario indica) hasta 1.*/

function naturales_reversa(num) {

    if (input_reverse != "") {
        for (var i = input_reverse; i >= 0; i--) {
            console.log(i);
        }
    }
    else {
        alert("Ingresa un valor valido");
    }
}

var input_reverse = prompt("Ingresa un numero");
console.log(naturales_reversa(input_reverse));


/*Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante*/

function verificacion(letra){

    vocal = ["a","e","i","o","u"]

    if (vocal.includes(letra)) {
        console.log(`La letra "${letra}" es una vocal`);
    }
    else {
        console.log(`La letra "${letra}" es una consonate`);
    }

}

do {
    var letra = prompt("Introduce una letra a verificar").toLowerCase();
    if (letra != ""){
        console.log(verificacion(letra));
    }
    else {
        alert("Por favor ingresa una letra");
    }
} while (letra != "");

/*Escriba una función donde solicite un número al usuario y me calcule su factorial.*/

function factorial(num) {
    var a = num_2;
    var b = 0;
    for (var i = (num_2 - 1) ; i >= 1; i--){
        b = a * i;
        a = b;
        console.log(b);
    }
    return b;
}

do {
    var num_2 = prompt("Ingresa un numero a calcular su factorial");
    if (num_2 != "") {
        console.log(`El factorial de ${num_2} es ${factorial(num_2)}`);
    }
    else {
        alert("Por favor ingresa un numero");
    }
} while (num_2 != "");


