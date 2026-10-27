let producto = {
    nombre:"Ambulia",
    precio: 6,
    disponible:true
};
console.log(producto);
//Accediendo a las propiedades del objeto
producto.nombre;
producto.precio;
producto.disponible;
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
//Añadiendo una nueva propiedad al objeto
producto.talla=["S", "M", "L", "XL"];
console.log(producto.talla);
//Modificar una propiedad al objeto
producto.precio=4,99;
console.log(producto.precio);
//Borrar una propiedad del obejto
delete producto.disponible;
console.log(producto);