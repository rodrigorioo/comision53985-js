// console.log("5");
// console.log("5");
// console.log("5");
// console.log("5");
// console.log("5");

// for (let i = 0; i < 10; i++) {
//     console.log("Hola como estás");
// }


/**
 * EJEMPLOS DE FOR
 */

// Sin for
// const numero1 = parseInt(prompt("Ingrese un número"));
// const numero2 = parseInt(prompt("Ingrese un número"));
// const numero3 = parseInt(prompt("Ingrese un número"));
// const numero4 = parseInt(prompt("Ingrese un número"));
// const numero5 = parseInt(prompt("Ingrese un número"));
//
// const resultado = numero1 + numero2 + numero3 + numero4 + numero5;

// Con for
// let resultado = 0;
// for (let i = 0; i < 5; i++) {
//     resultado = resultado + parseInt(prompt("Ingrese un número"));
// }
//
// console.log(resultado);

// Ejemplo con variable
// const cantidadDeNombres = parseInt(prompt("Ingrese la cantidad de nombres a ingresar"));
//
// for (let i = 0; i < cantidadDeNombres; i++) {
//     const nombre = prompt("Ingrese un nombre");
//
//     console.log(nombre);
// }

/**
 * SENTENCIA BREAK
 */

// const cantidadDeNombres = parseInt(prompt("Ingrese la cantidad de nombres a ingresar"));
//
// for (let i = 0; i < cantidadDeNombres; i++) {
//     const nombre = prompt("Ingrese un nombre");
//
//     if(nombre == "Carlos") {
//         console.log("Salimos del for");
//         break;
//     }
//
//     console.log(nombre);
// }
//
// console.log("Fin del programa");

/**
 * SENTENCIA CONTINUE
 */

// const cantidadDeNombres = parseInt(prompt("Ingrese la cantidad de nombres a ingresar"));
//
// for (let i = 0; i < cantidadDeNombres; i++) {
//     const nombre = prompt("Ingrese un nombre");
//
//     if(nombre == "Juan") {
//         continue;
//     }
//
//     console.log(nombre);
// }
//
// console.log("Fin del programa");

// Ejemplo de continue #2
// for (let i = 0; i < 10; i++) {
//
//     if(i % 2 != 0) {
//         continue;
//     }
//
//     console.log(i);
// }

/**
 * ESTRUCTURA DE WHILE
 */

// let opcion = parseInt(prompt("Ingrese 1 para mostrar un mensaje\n2 para ingresar un nombre\n3 para mostrar otro mensajito"));
//
// while (opcion != 1 && opcion != 2 && opcion != 3) {
//     alert("Opción incorrecta.")
//     opcion = parseInt(prompt("Ingrese 1 para mostrar un mensaje\n2 para ingresar un nombre\n3 para mostrar otro mensajito"));
// }
//
// if(opcion == 1) {
//     console.log("Mensajito");
// } else if(opcion == 2) {
//     const nombre = prompt("Ingrese un nombre");
//     console.log(nombre);
// } else if(opcion == 3) {
//     console.log("Otro mensajito");
// }

/**
 * ESTRUCTURA DO WHILE
 */

// do {
//     opcion = parseInt(prompt("Ingrese 1 para mostrar un mensaje\n2 para ingresar un nombre\n3 para mostrar otro mensajito"));
//
// } while (opcion != 1 && opcion != 2 && opcion != 3);
//
// if(opcion == 1) {
//     console.log("Mensajito");
// } else if(opcion == 2) {
//     const nombre = prompt("Ingrese un nombre");
//     console.log(nombre);
// } else if(opcion == 3) {
//     console.log("Otro mensajito");
// }

/**
 * SWITCH
 */

// let opcion = parseInt(prompt("Ingrese 1 para mostrar un mensaje\n2 para ingresar un nombre\n3 para mostrar otro mensajito"));
//
// while (opcion != 1 && opcion != 2 && opcion != 3) {
//     alert("Opción incorrecta.")
//     opcion = parseInt(prompt("Ingrese 1 para mostrar un mensaje\n2 para ingresar un nombre\n3 para mostrar otro mensajito"));
// }
//
// switch (opcion) {
//     case 1:
//         console.log("Mensajito");
//         break;
//
//     case 2:
//         const nombre = prompt("Ingrese un nombre");
//         console.log(nombre);
//         break;
//
//     case 3:
//         console.log("Otro mensajito");
//         break;
//
//     default:
//         console.log("a");
//         break;
// }

// Ejemplo #2

// const nombre = prompt("Ingrese un nombre");
//
// switch (nombre) {
//     case "Pedro":
//         console.log("Hola pedro");
//         break;
//
//     case "Daniel":
//         console.log("Hola daniel");
//         break;
//
//     default:
//         console.log("Nombre incorrecto");
//         break;
// }

// Calculadora

// let operacion = prompt("Ingrese la operación a realizar.\n+ Para suma\n- para resta\n* para multiplicación\n INGRESE CUALQUIER LETRA PARA SALIR");
//
// while( operacion == "+" || operacion == "-" || operacion == "*") {
//
//     const numero1 = parseInt(prompt("Ingrese un número"));
//     const numero2 = parseInt(prompt("Ingrese un número"));
//
//     switch(operacion) {
//
//         case "+":
//             console.log("La suma es: " + (numero1 + numero2));
//             break;
//
//         case "-":
//             console.log("La resta es: " + (numero1 - numero2));
//             break;
//
//         case "*":
//             console.log("La multiplicación es: " + (numero1 * numero2));
//             break;
//
//         default:
//             alert("Operación no válida");
//             break;
//     }
//
//     operacion = prompt("Ingrese la operación a realizar.\n+ Para suma\n- para resta\n* para multiplicación\nINGRESE CUALQUIER LETRA PARA SALIR");
// }
//
// console.log("Usted salió de la calculadora");

// Ejemplo de carrito

// let ingresarProducto = prompt("Ingrese Si para ingresar producto o cualquier letra para no");
// let total = 0;
//
// while (ingresarProducto == "Si") {
//
//     const nombreProducto = prompt("Nombre de producto");
//     const precioProducto = parseInt(prompt("Precio del producto"));
//
//     total = total + precioProducto;
//
//     console.log(nombreProducto + ": $" + precioProducto);
//
//     ingresarProducto = prompt("Ingrese Si para ingresar producto o cualquier letra para no");
// }
//
// console.log("El total de los productos son: $" + total);

/**
 * EJERCICIOS
 *
 * 15) Realizar un programa en donde el usuario ingrese un día de la semana y se le
 * muestre en pantalla:
 * a) Si es el comienzo de la semana (Lunes - Miercoles)
 * b) Si es fin de semana (Sabado y Domingo)
 * c) Si es mitad de semana (Jueves - Viernes)
 */

// let dia = prompt("Ingrese el día");
//
// while (dia != "Lunes" && dia != "Martes" && dia != "Miercoles" && dia != "Jueves" && dia != "Viernes" && dia != "Sabado" && dia != "Domingo") {
//     dia = prompt("Ingresa un día");
// }
//
// switch(dia) {
//     case "Lunes":
//     case "Martes":
//     case "Miercoles":
//         console.log("Comienzo de semana");
//         break;
//
//     case "Jueves":
//     case "Viernes":
//         console.log("Mitad de semana");
//         break;
//
//     case "Sabado":
//     case "Domingo":
//         console.log("Fin de semana");
//         break;
// }

/**
 * EJERCICIOS
 *
 * 12) Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre
 * todos los que ingrese calcular cual es el mayor, el menor y la media.
 */

let mayor = 0;
let menor = 0;
let media = 0;

const cantidadNumeros = parseInt(prompt("Ingrese cantidad de numeros a ingresar"));

// Le pedimos el primer número
if(cantidadNumeros > 0) {
    const numero = parseInt(prompt("Ingrese un número"));

    mayor = numero;
    menor = numero;
}

for(let i = 0; i < cantidadNumeros - 1; i++) {

    const numero = parseInt(prompt("Ingrese un número"));

    // Calculo la media
    media = media + numero;

    if(numero > mayor) {
        mayor = numero;
    }

    if(numero < menor) {
        menor = numero;
    }
}

console.log("La media es: " + (media / cantidadNumeros));
console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);