function saludar() {
  const nombre = document.getElementById("nombre").value;
  return `¡Hola, ${nombre}! Bienvenido.`;
}

function edad() {
  const valor = Number(document.getElementById("edadUsuario").value);

  if (valor >= 18) {
    return `Tienes ${valor} años. Eres mayor de edad`;
  } else {
    return `Tienes ${valor} años. Eres menor de edad`;
  }
}

function mostrar(idSpan, texto) {
  document.getElementById(idSpan).textContent = texto;
}