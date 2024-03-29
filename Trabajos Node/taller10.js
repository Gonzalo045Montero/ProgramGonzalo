
/*for(let i=0; i<5; i++)
{console.groupCollapsed("valor de i", i)
}

let u= 0
while (u<5){
console.log("valor de u", u)
u = u +1
}

let numero = 5;
let factorial = 1;

for(let i =1; i <= numero; i++){
    factorial*=i;
}
console.log("El factorial de" , numero , "es: ",factorial);



for(let i=0; i<9; i++)
{console.groupCollapsed("valor de i", i)
}

let u= 0
while (u<9){
console.log("valor de u", u)
u = u +1
}

let numero = 9;
let factorial = 1;

for(let i =1; i <= numero; i++){
    factorial*=i;
}
console.log("El factorial de" , numero , "es: ",factorial);




for(let i=1; i<5; i++)
{console.groupCollapsed("valor de i", i)
}

let u= 1
while (u<5){
console.log("valor de u", u)
u = u +1
}

let numero = 5;
let factorial = 1;

for(let i =1; i <= numero; i++){
    factorial*=i;
}
console.log("El factorial de" , numero , "es: ",factorial);


// ejercicio de una tabla de multiplicar
let tabla = 9;
let limite = 10;
console.log("tabla de multiplicar del" + tabla + ":");

for(let i = 1; i <= limite; i++){
    let resultado = tabla * i;
    console.log(tabla + " x " + i + "=" + resultado);

}
let factorial = 1;
for( let j = 1; j <= tabla; j++) {
    factorial *= j;
}

console.log("El factorial de " + tabla + "es:" + factorial);*/


//Tabla de multiplicar

 let tabla = 11;
 let producto = 1;
 let topeFactor = 30;
 for(let i= 1; i<=topeFactor; i++){
    producto =tabla*i;

    console.log(tabla, "x", i, "=", producto);
 }