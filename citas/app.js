let citas = [];
 
// =====================================
// ELEMENTOS DEL DOM
// =====================================
 
const formulario = document.querySelector("#form-cita");
const inputNombre = document.querySelector("#nombre");
const inputFecha = document.querySelector("#fecha");
const inputHora = document.querySelector("#hora");
const inputMotivo = document.querySelector("#motivo");
const mensaje = document.querySelector("#mensaje");
const listaCitas = document.querySelector("#lista-citas");
const contador = document.querySelector("#contador");
 
// =====================================
// ALMACENAMIENTO LOCAL (ampliación)
// =====================================
 
function guardarCitas() {
  try {
    localStorage.setItem("citas", JSON.stringify(citas));
  } catch (error) {
    console.error("No se pudo guardar:", error);
  }
}
 
function cargarCitas() {
  try {
    const guardadas = localStorage.getItem("citas");
    if (guardadas) {
      citas = JSON.parse(guardadas);
    }
  } catch (error) {
    citas = [];
  }
}
 
// =====================================
// MENSAJES
// =====================================
 
function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}
 
// =====================================
// AÑADIR CITA
// =====================================
 
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
 
  const nombre = inputNombre.value.trim();
  const fecha = inputFecha.value;
  const hora = inputHora.value;
  const motivo = inputMotivo.value.trim();
 
  // Validación: todos los campos son obligatorios
  if (nombre === "" || fecha === "" || hora === "" || motivo === "") {
    mostrarMensaje("Debes completar todos los campos del formulario.", "error");
    return;
  }
 
  const cita = {
    id: Date.now(),
    nombre: nombre,
    fecha: fecha,
    hora: hora,
    motivo: motivo
  };
 
  citas.push(cita);
  guardarCitas();
  mostrarCitas();
 
  formulario.reset();
  mostrarMensaje("Cita guardada correctamente.", "ok");
});
 
// =====================================
// MOSTRAR CITAS
// =====================================
 
function mostrarCitas() {
  listaCitas.innerHTML = "";
  contador.textContent = citas.length;
 
  if (citas.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.textContent = "No hay citas registradas.";
    listaCitas.appendChild(vacio);
    return;
  }
 
  // Ordenar por fecha y hora (ampliación)
  const ordenadas = [...citas].sort(function (a, b) {
    return (a.fecha + a.hora).localeCompare(b.fecha + b.hora);
  });
 
  for (const cita of ordenadas) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "cita";
 
    const titulo = document.createElement("h3");
    titulo.textContent = cita.nombre;
 
    const pFecha = document.createElement("p");
    pFecha.textContent = "📅 Fecha: " + cita.fecha;
 
    const pHora = document.createElement("p");
    pHora.textContent = "🕒 Hora: " + cita.hora;
 
    const pMotivo = document.createElement("p");
    pMotivo.textContent = "📝 Motivo: " + cita.motivo;
 
    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "eliminar";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      eliminarCita(cita.id);
    });
 
    tarjeta.append(titulo, pFecha, pHora, pMotivo, botonEliminar);
    listaCitas.appendChild(tarjeta);
  }
}
 
// =====================================
// ELIMINAR CITA
// =====================================
 
function eliminarCita(id) {
  citas = citas.filter(function (cita) {
    return cita.id !== id;
  });
 
  guardarCitas();
  mostrarCitas();
  mostrarMensaje("Cita eliminada.", "ok");
}
 
// =====================================
// INICIO
// =====================================
 
cargarCitas();
mostrarCitas();