// Paso 1: datos
const edad = 20;
const plazas = 3;
const precio = 25;
const esEstudiante = true;

// Mostrar en el HTML
document.getElementById("edad").textContent = edad;
document.getElementById("plazas").textContent = plazas;
document.getElementById("precio").textContent = precio + " €";

// Mostrar en la consola
console.log("Edad:", edad);
console.log("Plazas:", plazas);
console.log("Precio:", precio + " €");
console.log("Es estudiante:", esEstudiante);

// Paso 2: plazas
const mensajePlazas = document.getElementById("mensaje-plazas");

if (plazas < 5) {
  mensajePlazas.textContent = "¡Últimas plazas!";
} else {
  mensajePlazas.textContent = "Plazas disponibles";
}
console.log(mensajePlazas.textContent);

// Paso 3: edad
const mensajeEdad = document.getElementById("mensaje-edad");

if (edad >= 18) {
  mensajeEdad.textContent = "Puedes realizar la reserva";
} else {
  mensajeEdad.textContent = "No puedes realizar la reserva (eres menor de edad)";
}
console.log(mensajeEdad.textContent);

// Paso 4: descuento con ternario
const mensajeDescuento = document.getElementById("mensaje-descuento");

mensajeDescuento.textContent = esEstudiante
  ? "Tienes descuento de estudiante"
  : "Precio estándar";
console.log(mensajeDescuento.textContent);







