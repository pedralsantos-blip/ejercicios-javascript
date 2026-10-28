let producto = {
    nombre: "Ambulia",
    tallas: {
        "Esqueje": 4.99,
        "Maceta": 6,
        "InVitro": 8.5,
        "Planta madre": 15
    }
};

// Lo que quieres comprar (cámbialo a tu gusto)
let tallaElegida = "Maceta";
let cantidad = 3;

// Función que calcula el total
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// 1. Object.keys → solo los nombres de las tallas
let nombres = Object.keys(producto.tallas);
console.log("Tallas disponibles:", nombres);

// 2. Object.values → solo los precios
let precios = Object.values(producto.tallas);
console.log("Precios:", precios);
console.log("Más barata:", Math.min(...precios) + "€");
console.log("Más cara:", Math.max(...precios) + "€");

// 3. Object.entries → pares [nombre, precio]
console.log("--- Lista completa ---");
Object.entries(producto.tallas).forEach(function (par) {
    console.log(par[0] + ": " + par[1] + "€");
});

// Buscamos la talla usando keys (sin distinguir mayúsculas/minúsculas)
let nombreTalla = nombres.find(function (n) {
    return n.toLowerCase() === tallaElegida.toLowerCase();
});

// Comprobamos y mostramos el resultado
console.log("--- Tu compra ---");
if (nombreTalla && cantidad > 0) {
    let precio = producto.tallas[nombreTalla];
    let total = calcularTotal(precio, cantidad);
    console.log("Producto: " + producto.nombre);
    console.log("Talla: " + nombreTalla);
    console.log("Cantidad: " + cantidad);
    console.log("Total: " + total.toFixed(2) + "€");
} else if (!nombreTalla) {
    console.log("Esa talla no existe");
} else {
    console.log("Cantidad no válida");
}

