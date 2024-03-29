/*function sumaNumerosPares(numero) {
    let suma = 0
    for(let i =2; i <= numero; i += 2){
        suma += i;
    }
    return suma; 
}

let numero;
do {
    numero = parseFloat(prompt("Ingrese un número entero positivo mayor igual que 2:"));

    if(!Number.isInteger(numero) || numero < 2) {
        alert("Por favor, ingrese un númeroentero positivo mayor igual que 2.");
    }
}*/

function agregarElemento(){
    var nuevoElemento = documento.createElement("p");
    nuevoElemento.innerText = "Nuevo Elemento";
    document.getElementById("contenedor").appeendchild(nuevoElemento);
}
function eliminarElemento(){
    var contenedor = document.getElementById("contenedor");
    var elemento = contenedor.getElementsBytagsName("p");
    if (elemento.lenght > 0) {
        contenedor.removeChild(elemento[elemento.lenght -1]);
    }


}