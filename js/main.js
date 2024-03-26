// PARÁMETROS NUMEROS
// function sumar(numero1, numero2, numero3) {
//     const resultado = numero1 + numero2 + numero3;
//
//     console.log(resultado);
// }
//
// console.log("Empieza el programa");
//
// const a = 5;
// const b = 10;
// const c = 8;
// sumar(a, b, c);

// sumar(3, 5, 20);

// sumar(1, 2, 3);

// PARÁMETROS STRING
// function saludar(nombre, saludo) {
//
//     console.log("Hola " + nombre + " " + saludo);
// }
//
// saludar("Pedro", "cómo estás?");
//
// saludar("Miguel", "que onda");

// RETURN EN FUNCIÓN
// function sumar(numero1, numero2, numero3) {
//     return numero1 + numero2 + numero3;
// }
//
// function multiplicarPor2(numero) {
//     console.log(numero * 2);
// }
//
// const resultadoDeLaSuma = sumar(2, 5, 10);
// multiplicarPor2(resultadoDeLaSuma);

// function dividir(numero1, numero2) {
//     if(numero2 === 0) {
//         return 0;
//     }
//
//     return numero1 / numero2;
// }
//
// const resultadoDeLaDivision = dividir(20, 0);
// console.log(resultadoDeLaDivision);

// SCOPE GLOBAL Y LOCAL
// function cambiarNombre(nuevoNombre) {
//     const nombre = "Pedro";
//
//     console.log(nombre);
// }
//
// let nombre = "Miguel";
//
// cambiarNombre("Miguel");
//
// console.log(nombre);

// FUNCIÓN ANÓNIMA
// const saludar = function (nombre, nombre2) {
//     console.log(nombre);
//     console.log(nombre2);
// }
//
// saludar("Miguel", "Roberto");

// FUNCIÓN FLECHA

// Esto es lo mismo que
// const iva = (precio) => {
//     return precio * 0.21;
// }
// Esta
// const iva = (precio) => precio * 0.21;

// FUNCIÓN ANÓNIMA Y FUNCIÓN FLECHA QUE NO DEVUELVE NADA
// const iva = (precio) => {
//     const resultado = precio * 0.21;
//
//     console.log("El IVA de $" + precio + " es $" + resultado);
// }

// EJEMPLO DE FUNCIÓN ANÓNIMA PASANDO UNA FUNCIÓN COMO PARÁMETRO
// function imprimeNumeros(numero, accion) {
//     for(let i = 0; i < numero; i++) {
//         accion(i);
//     }
// }
//
// imprimeNumeros(5, function (i) {
//     console.log(i * 2);
// });
//
// imprimeNumeros(5, function (i) {
//     console.log(i * 3);
// });
//
// imprimeNumeros(5, function (i) {
//     console.log(i * 4);
// });

// imprimeNumerosPor2(5); // Quiero multiplicar cada numero por 2 y mostrarlo

// ...

// imprimeNumerosPor3(5); // Quiero multiplicar cada numero por 3 y mostrarlo

// ...

// imprimeNumerosPor4(5);