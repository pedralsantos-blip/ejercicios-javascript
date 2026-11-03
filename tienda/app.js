
// =====================================
// DATOS DE LA TIENDA
// =====================================
 
const productos = [
  { id: 1, nombre: "Teclado", categoria: "Periféricos", precio: 35, icono: "⌨️" },
  { id: 2, nombre: "Ratón", categoria: "Periféricos", precio: 20, icono: "🖱️" },
  { id: 3, nombre: "Auriculares", categoria: "Audio", precio: 50, icono: "🎧" },
  { id: 4, nombre: "Monitor", categoria: "Pantallas", precio: 150, icono: "🖥️" }
];
 
const carrito = [];
 
// =====================================
// RETO 1 · SALUDO SEGÚN LA HORA
// =====================================
 
const hora = new Date().getHours();
const saludo = document.querySelector("#saludo");
 
if (hora < 12) {
  saludo.textContent = "Buenos días";
} else if (hora < 20) {
  saludo.textContent = "Buenas tardes";
} else {
  saludo.textContent = "Buenas noches";
}
 
// =====================================
// RETO 2 · PROMOCIONES
// =====================================
 
function mostrarPromocion(tipo) {
  const promocion = document.querySelector("#promocion");
 
  if (tipo === "ofertas") {
    promocion.innerHTML = `
      <h3>¡Ofertas especiales!</h3>
      <ul>
        <li>Teclado por solo 35 €.</li>
        <li>Ratón por solo 20 €.</li>
      </ul>
    `;
  } else {
    promocion.innerHTML = `
      <h3>Nuestros productos destacados</h3>
      <ul>
        <li>Auriculares por 50 €.</li>
        <li>Monitor por 150 €.</li>
      </ul>
    `;
  }
}
 
// =====================================
// RETOS 3 y 4 · CATÁLOGO CON BOTONES
// =====================================
 
function mostrarProductos(lista = productos) {
  const catalogo = document.querySelector("#catalogo");
  catalogo.innerHTML = "";
 
  for (const producto of lista) {
    catalogo.innerHTML += `
      <article class="tarjeta">
        <div class="icono">${producto.icono}</div>
        <h3>${producto.nombre}</h3>
        <p>${producto.categoria}</p>
        <p class="precio">${producto.precio} €</p>
        <button type="button" onclick="agregarCarrito(${producto.id})">
          Añadir al carrito
        </button>
      </article>
    `;
  }
 
  document.querySelector("#contador-productos").textContent = lista.length;
}
 
// =====================================
// RETO 5 · AÑADIR AL CARRITO
// =====================================
 
function agregarCarrito(id) {
  const producto = productos.find(function (p) {
    return p.id === id;
  });
 
  carrito.push(producto);
  console.log(carrito);
 
  mostrarCarrito();
  calcularTotal();
}
 
// =====================================
// RETO 6 · MOSTRAR EL CARRITO
// =====================================
 
function mostrarCarrito() {
  const listaCarrito = document.querySelector("#lista-carrito");
  listaCarrito.innerHTML = "";
 
  if (carrito.length === 0) {
    listaCarrito.innerHTML = `<p class="vacio">Todavía no hay productos añadidos.</p>`;
    return;
  }
 
  for (let i = 0; i < carrito.length; i++) {
    listaCarrito.innerHTML += `
      <div class="item-carrito">
        <span>${carrito[i].nombre} - ${carrito[i].precio} €</span>
        <button type="button" onclick="eliminarCarrito(${i})">Eliminar</button>
      </div>
    `;
  }
}
 
// =====================================
// RETO 7 · CALCULAR TOTAL
// =====================================
 
function calcularTotal() {
  let total = 0;
 
  for (const producto of carrito) {
    total += producto.precio;
  }
 
  document.querySelector("#total-carrito").textContent = total + " €";
}
 
// =====================================
// RETO 8 · ELIMINAR DEL CARRITO
// =====================================
 
function eliminarCarrito(posicion) {
  carrito.splice(posicion, 1);
 
  mostrarCarrito();
  calcularTotal();
}
 
// =====================================
// RETO 9 · FINALIZAR COMPRA
// =====================================
 
function finalizarCompra() {
  document.querySelector("#mensaje-compra").textContent = "Tu compra se ha finalizado";
}
 
// =====================================
// EXTRA · BUSCADOR DE PRODUCTOS
// =====================================
 
function buscarProductos() {
  const texto = document.querySelector("#buscador").value.trim().toLowerCase();
  const resultado = document.querySelector("#resultado");
 
  const encontrados = productos.filter(function (p) {
    return p.nombre.toLowerCase().includes(texto);
  });
 
  mostrarProductos(encontrados);
 
  if (encontrados.length === 0) {
    resultado.textContent = "No se han encontrado productos.";
  } else {
    resultado.textContent = "Productos encontrados: " + encontrados.length;
  }
}
 
// =====================================
// INICIO
// =====================================
 
mostrarProductos();