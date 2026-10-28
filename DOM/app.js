document.getElementById("saludo").textContent="Hola este es un saludo";


document.querySelectorAll(".mensaje").forEach(function (p) {
    p.textContent = "Usando querySelector";
    });