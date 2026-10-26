// Elementos del HTML
let boton = document.getElementById("lanzar");
let mensaje = document.getElementById("mensaje");
let historial = document.getElementById("historial");

// Array donde guardamos todos los números obtenidos
let resultados = [];

boton.addEventListener("click", function () {
    // Número aleatorio entre 1 y 6
    let numero = Math.floor(Math.random() * 6) + 1;

    // Lo añadimos a la lista
    resultados.push(numero);

    // Mensaje de ganar o perder
    if (numero === 6) {
        mensaje.textContent = "¡Enhorabuena! Has ganado";
        mensaje.className = "ganado";
    } else {
        mensaje.textContent = "No has sacado un 6. ¡Inténtalo otra vez!";
        mensaje.className = "";
    }

    // Mostramos la lista en la página
    historial.textContent = "Números obtenidos: " + resultados.join(", ");
});