let inventario = [];
let continuar;

do {
    let nombreArticulo = prompt("Hola ingrese por favor el nombre del articulo: ");
    let cantidadArticulos = parseInt(prompt("ingrese la cantidad del articulo"));

inventario.push({nombreArticulo, cantidadArticulo});

let respuesta = prompt("¿ Desea agregar masarticulos (si/no)?").
toLowerCase();
continuar = (respuesta === 'si');
}while(continuar);

console.log("Tu pedido final:", inventario)

