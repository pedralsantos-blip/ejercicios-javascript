let producto = {
    nombre: "Ambulia",
    precio: 6,
    cantidad: 1,
    disponible: true,
    calcularTotalProducto: function () {
        return this.precio * this.cantidad;
    }
};
console.log(producto);

// Accediendo a las propiedades del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Añadiendo una nueva propiedad: cada talla con su precio
producto.tallas = [
    { nombre: "Esqueje", precio: 4.99 },
    { nombre: "Maceta", precio: 6 },
    { nombre: "InVitro", precio: 8.5 },
    { nombre: "Planta madre", precio: 15 }
];
console.log(producto.tallas);

// Recorrer las tallas con función flecha
producto.tallas.forEach(t => {
    console.log(t.nombre + ": " + t.precio + "€");
});

// Buscar el precio de una talla concreta con función flecha
const variante = producto.tallas.find(t => t.nombre === "InVitro");
console.log(variante.precio);

// Modificar una propiedad del objeto
producto.precio = 4.99;
console.log(producto.precio);

// Total del producto
console.log(producto.calcularTotalProducto());

// Borrar una propiedad del objeto
delete producto.disponible;
console.log(producto);

