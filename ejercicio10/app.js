//utilizamos el modulo %///
for (let numero = 1; numero < 20; numero++) {
    console.log("esto es una vuelta de bucle: " + numero);

    if (numero % 2 === 0) {
        console.log("este es un numero par: " + numero);
    }
}


///quiero un app que solo permita pasar a las personas mayores de 18 años//

const mensaje = document.getElementById("mensaje");
let puedenPasar = 0;

for (let persona = 1; persona <= 10; persona += 1) {
  const edad = Number(prompt("Persona " + persona + ": escribe tu edad"));

  if (edad >= 18) {
    puedenPasar += 1;
  }
}

if (puedenPasar === 10) {
  mensaje.textContent = "Las 10 personas pueden entrar.";
} else {
  mensaje.textContent = "Solo pueden entrar " + puedenPasar + " de 10.";
}