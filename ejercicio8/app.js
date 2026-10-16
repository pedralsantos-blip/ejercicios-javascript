function evaluarNota() {
  const nombre = document.getElementById("nombre").value;
  const notaTexto = document.getElementById("nota").value;
  const nota = Number(notaTexto);

  let calificacion = "";
  let mensaje = "";

  if (notaTexto.trim() === "" || nota < 0 || nota > 10) {
    document.getElementById("resultado").textContent =
      "Introduce una nota válida entre 0 y 10.";
    document.getElementById("mensaje").textContent = "";
    return;
  }

  if (nota < 5) {
    calificacion = "Suspenso";
  } else if (nota < 6) {
    calificacion = "Suficiente";
  } else if (nota < 7) {
    calificacion = "Bien";
  } else if (nota < 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  switch (calificacion) {
    case "Suspenso":
      mensaje = "Necesitas seguir practicando.";
      break;
    case "Suficiente":
      mensaje = "Has conseguido aprobar.";
      break;
    case "Bien":
      mensaje = "Buen trabajo.";
      break;
    case "Notable":
      mensaje = "Muy buen resultado.";
      break;
    case "Sobresaliente":
      mensaje = "Excelente trabajo.";
      break;
    default:
      mensaje = "No se ha podido obtener el mensaje.";
  }

  document.getElementById("resultado").textContent =
    nombre + ", has obtenido un " + calificacion +
    " con una nota de " + nota + ".";
  document.getElementById("mensaje").textContent = mensaje;
}