/*let numero1 = 5;
let numero2 = 3;

let sumar = numero1 + numero2;
let resultado = suma *2;
console.log(resultado);

function sumarYDuplicar(num1, num2){
    let sum = num1 + num2;
    let reulta = sum*2;
    return reulta;
}


let final = sumarYDuplicar(5,3) 
console.log(final)


// do while
let u = 4;

do {
    console.log("mayor u = + 2");
    u = u+2;
    u = u-2;
} while (u < 4);

console.log("menor u = - 2");

let numero = parseInt(prompt("ingrese un numero entero positivo:"));
while (numero < 2) {
    alert("Intente otra vez: El número debe ser mayor o igual 2");
    numero = parseInt(prompt("ingrese un numero entero positivo:"));
}
let numeroItera = 2;
let suma = 0;
while (numeroItera <= numero) {
    if (numeroItera % 2 == 0) {
        alert("El número " + numeroItera + " es par");
        suma = numeroItera + suma;
            } else {
        alert("El número " + numeroItera + " es impar")
    }
    numeroItera++;
}
alert("La suma de todos los numeros dentro del rango "+suma);
*/


function sumaNumerosPares(numero) {
    for(let i = 2; i <=numero; i += 2) {
        suma += i;
    }
    return suma
}
let numero;
do {
    numero = parseFloat(prompt("Ingrese un número entero positivo mayor o igual que 2."));
    if (!Number.isInteger(numero) || numero < 2) {
        alert("Por favor, ingrese un número entero positivo mayor o igual que 2.");
    }
} while (!Number.isInteger(numero) || numero < 2);
const resultado = sumaNumerosPares(numero);
console.log("La suma de todos los números pares desde 2 hasta:",numero," es:", resultado);














