let cantidadPantalones = 2;
let precioPantalon = 30;
let cantidadCamisetas = 1;
let precioCamiseta = 15;
let total = (cantidadPantalones * precioPantalon) + (cantidadCamisetas * precioCamiseta);
document.getElementById("total").textContent = total;

let gastosEnvio=5;
let totalConEnvio=total+gastosEnvio;
document.getElementById("totalConEnvio").textContent=totalConEnvio;

let descuento = false;

if (total > 100 || cantidadCamisetas + cantidadPantalones > 3) {
    descuento = true;
}
document.getElementById("descuento").textContent = descuento ? "Sí" : "No";

let clubFidelidad = true;
let esViernes = true;
let descuentoAdicional = clubFidelidad && esViernes;

document.getElementById("descuentoAdicional").textContent = descuentoAdicional ? "Sí" : "No";