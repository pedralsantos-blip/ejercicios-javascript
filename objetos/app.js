let producto = {
    nombre: "Ambulia",
    tallas: [
        { nombre: "Esqueje", precio: 4.99 },
        { nombre: "Maceta", precio: 6 },
        { nombre: "InVitro", precio: 8.5 },
        { nombre: "Planta madre", precio: 15 }
    ],
    calcularTotal: function (precioTalla, cantidad) {
        return precioTalla * cantidad;
    }
};

// Mostrar las opciones disponibles
let opciones = producto.tallas.map(t => t.nombre + " (" + t.precio + "€)").join("\n");

let eleccion = prompt("¿Qué talla quieres?\n" + opciones);

// Buscar la talla (sin distinguir mayúsculas/minúsculas)
let talla = producto.tallas.find(t => t.nombre.toLowerCase() === eleccion.toLowerCase());

if (talla) {
    let cantidad = Number(prompt("¿Cuántas unidades?"));

    if (cantidad > 0) {
        let total = producto.calcularTotal(talla.precio, cantidad);
        alert("Total: " + total.toFixed(2) + "€");
    } else {
        alert("Cantidad no válida");
    }
} else {
    alert("Esa talla no existe");
};

