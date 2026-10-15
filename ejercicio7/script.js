//crea datos para edad, plazas disponibles, precio y si es estudiante.Muestra 
const edad = 33;
const plazasDisponibles = 3;
const precio = 20;
const esEstudiante = true;

document.getElementById("edad").textContent = edad;
document.getElementById("plazas").textContent = plazasDisponibles;
document.getElementById("precio").textContent = `${precio} €`;

const mensajePlazas = document.getElementById("mensaje-plazas");
if (plazasDisponibles < 5) {
  mensajePlazas.textContent = "¡Últimas plazas!";
} else {
  mensajePlazas.textContent = "Plazas disponibles";
}

const mensajeEdad = document.getElementById("mensaje-edad");
if (edad >= 18) {
  mensajeEdad.textContent = "Puedes realizar la reserva";
} else {
  mensajeEdad.textContent = "Debes ser mayor de edad";
}

const mensajeDescuento = esEstudiante
  ? "Tienes descuento de estudiante"
  : "Precio estándar";
document.getElementById("mensaje-descuento").textContent = mensajeDescuento;