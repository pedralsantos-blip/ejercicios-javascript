let precios = [10, 20, 30, 40];
let preciosIva = [];
// for...of
for (let precio of precios) {
    console.log(precio);
}
// forEach recorre cada elemento del array y ejecuta
// la función que le pasamos como parámetro
precios.forEach(function(precio) {
    let precioIva = precio * 1.21;
    console.log(precioIva);
});
// forEach con función flecha
precios.forEach(precio => {
    let precioIva = precio * 1.21;
    preciosIva.push(precioIva);
    console.log(precioIva);
});
console.log("array original de precios sin IVA:", precios);
console.log("precios con IVA:", preciosIva);

// map: crea una lista transformada
let preciosDescuento = precios.map(precio => precio * 0.85);
console.log("Array original de precios sin descuento:", precios);
console.log("Precios con descuento del 15%:", preciosDescuento);

// filter: lista solo con los elementos que cumplen la condición
let productosCaros = precios.filter(precio => precio > 25);
console.log("Productos caros (precio > 25):", productosCaros);

// find: devuelve el primer elemento que cumple la condición
let producto30 = precios.find(precio => precio === 30);
console.log("Producto con precio 30:", producto30);

let producto45 = precios.find(precio => precio === 45);
console.log("Producto con precio 45:", producto45);

// includes: comprueba si el valor existe en el array(devuelve true o false)
let exist = precios.includes(25) && precios.includes(40);
console.log(exist);

//reduce: acumulador de precios-->muestra el total del carrito
const total=precios.reduce((suma,precio)=>suma+precio,0);
console.log("Total de precios:"+total);
