// IF

// let nombre = prompt("Ingrese el nombre");
//
// if (nombre == "Rodrigo") {
//     console.log("Hola Rodrigo");
// }
//
// if (nombre == "Pepe") {
//     console.log("Hola pepe, cómo estás?");
// }

// IF - ELSE

// const nombre = prompt("Ingres el nombre");
//
// if (nombre == "Rodrigo") {
//     console.log("Hola Rodrigo, cómo estás?");
// } else {
//     console.log("Hola quien quiera que seas");
// }

// IF, ELSE IF Y ELSE

// const nombre = prompt("Ingres el nombre");
//
// if (nombre == "Rodrigo") {
//     console.log("Hola Rodrigo, cómo estás?");
// } else if (nombre == "Pedro") {
//     console.log("Hola Pedro, todo bien?");
// } else if (nombre == "Juan") {
//     console.log("Que onda Juan");
// } else {
//     console.log("Hola quien quiera que seas");
// }

// VARIABLES BOOLEANAS

// const nombre = prompt("Ingres el nombre");
//
// const esRodrigo = (nombre == "Carlos");
//
// if (esRodrigo) {
//     console.log("Hola rodrigo cómo estás");
// } else {
//     console.log("No sos Rodrigo");
// }

// OPERADORES LÓGICOS

// const nombre = prompt("Ingrese un nombre");
//
// if(nombre != "Juan") {
//     console.log("No sos Juan");
// }

// const precio = 400;
//
// if (precio > 500) {
//     console.log("Mayor a 500");
// }
//
// if (precio < 500) {
//     console.log("Menor a 500");
// }
//
// if (precio >= 500) {
//     console.log("Mayor o igual a 500");
// }
//
// if (precio <= 500) {
//     console.log("Menor o igual a 500");
// }

// OPERADORES && Y ||

// const nombre = prompt("ingrese un nombre");
// const edad = parseInt(prompt("Ingrese la edad"));

// if ( (nombre == "Rodrigo") && (edad > 18)) {
//     console.log("Acceso permitido");
// }

// if ( (nombre == "Rodrigo") || (edad > 18) ) {
//     console.log("Acceso permitido");
// }

// ---------

// const nombre = prompt("ingrese un nombre");
// const edad = parseInt(prompt("Ingrese la edad"));

// ESTO ESTA BIEN
// if ( (nombre == "Rodrigo" || nombre == "rodrigo") && (edad > 18) ) {
//     console.log("Acceso permitido");
// }

// ESTO ESTA MAL!!!!!!
// if ( nombre == "Rodrigo" || (nombre == "rodrigo" && edad > 18) ) {
//     console.log("Acceso permitido");
// }

// OPERADOR ESTRICTAMENTE IGUAL / DISTINTO

// const edad = parseInt(prompt("Ingrese la edad"));

// ESTRICTAMENTE IGUAL
// if (edad == 20) {
//     console.log("Usted tiene 20");
// }

// if (edad === 20) {
//     console.log("Usted tiene 20");
// }

// ESTRICTAMENTE DISTINTO
// if (edad != 20) {
//     console.log("Edad distinta de 20");
// }

// if (edad !== 20) {
//     console.log("Edad distinta de 20");
// }

// OPERADOR NOT

const edad = parseInt(prompt("Ingrese la edad"));

const esMayorA18 = (edad > 18);

if (esMayorA18) {
    console.log("Es mayor a 18");
}

// ...

if (esMayorA18) {
    console.log("Es mayor a 18.");
}

// ...

if (!esMayorA18) {
    console.log("NO ES MAYOR A 18");
}