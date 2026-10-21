// Función con parámetro y return: recibe la edad y devuelve el mensaje
function comprobarAcceso(edad) {
  if (edad >= 18) {
    return "🎉 ¡Bienvenido, puedes entrar!";
  } else {
    return "⛔ No puedes entrar";
  }
}

// Se ejecuta al pulsar el botón
function mostrarResultado() {
  const campo = document.getElementById("edad");
  const resultado = document.getElementById("resultado");

  if (campo.value === "" || Number(campo.value) < 0) {
    resultado.textContent = "Introduce una edad válida.";
    resultado.className = "";
    return;
  }

  const edad = Number(campo.value);
  const mensaje = comprobarAcceso(edad);

  resultado.textContent = mensaje;
  resultado.className = edad >= 18 ? "permitido" : "denegado";
}

document.getElementById("boton").addEventListener("click", mostrarResultado);