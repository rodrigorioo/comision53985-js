/**
 * Ciclos - 8) Genera y muestra los primeros N números de la secuencia de Fibonacci, donde N es
 * un número ingresado por el usuario.
 * NOTA: En matemáticas, la sucesión de Fibonacci (a veces mal llamada serie de
 * Fibonacci) es la sucesión infinita de números naturales.
 * 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377… La sucesión comienza con los números
 * 0 y 1, y a partir de estos, cada elemento es la suma de los dos anteriores.
 */

// const number = parseInt(prompt('Insert Number'));
// let number1 = 0;
// let number2 = 1;
//
// for (let i = 0; i < number; i++) {
//     if(i === 0 || i === 1) {
//         console.log(i);
//     } else {
//         const result = number1 + number2;
//         number1 = number2;
//         number2 = result;
//
//         console.log(result);
//     }
// }

/**
 * Ciclos - 10)  Escriba un programa en dónde se le solicite un número al usuario y determine si es
 * un número primo o no.
 */

// const numero = parseInt(prompt("Ingrese un número"));
//
// let primo = true;

// Forma 1 con for
// for(let i = 1; i < numero; i++) {
//     if(numero % i === 0 && i !== 1) {
//         primo = false;
//     }
// }

// Forma 2 con while
// let contador = numero;
// while(contador > 1) {
//     if(numero % contador === 0 && contador !== numero) {
//         primo = false;
//     }
//
//     contador = contador - 1;
// }
//
// if(primo) {
//     console.log("El número es primo");
// } else {
//     console.log("El número no es primo");
// }

/**
 * Funciones - 11) Escriba una función que dado un número n, devuelva su factorial. El factorial de un
 * número n se calcula como n! = n * (n-1) * (n-2) * ... * 1.
 */

// 8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
// 8! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8;

// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24

// function factorial(n) {
//     let resultado = 1;
//
//     for(let i = 1; i <= n; i++) {
//         resultado = resultado * i;
//     }
//
//     return resultado;
// }
//
// const numero = parseInt(prompt("Ingrese un número"));
//
// const resultadoFactorial = factorial(numero);
//
// console.log("El factorial de " + numero + " es: " + resultadoFactorial);

/**
 * EJEMPLO DE ENTREGA - SIMULADOR DE PRÉSTAMOS
 *
 * CICLO - CONDICIONAL - FUNCION
 */

function simularPrestamo() {

    const monto = parseFloat(prompt("Ingrese el monto"));
    let tasa = 0.20;

    if(monto > 10000) {
        tasa = 0.15;
    }

    const calculoPrestamo = monto + (monto * tasa);

    console.log("Prestamo aceptado. Usted tiene que pagar $" + calculoPrestamo);
}

function pagarPrestamo() {
    alert("PRESTAMO PAGADO");
}

let opcion = parseInt(prompt("Ingrese la opción que quiera elegir:\n1- Simular préstamo\n2- Pagar préstamo\n0- SALIR"));

while(opcion !== 0) {

    switch(opcion) {
        case 1:
            simularPrestamo();
            break;

        case 2:
            pagarPrestamo();
            break;
    }

    opcion = parseInt(prompt("Ingrese la opción que quiera elegir:\n1- Simular préstamo\n2- Pagar préstamo\n0- SALIR"));
}

console.log("GRACIAS POR USAR NUESTROS SERVICIOS");