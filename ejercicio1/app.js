let nombre = prompt("Introduce tu nombre");
let ciudad = prompt("Introduce tu ciudad");
let edad = Number(prompt("Introduce tu edad"));

// Concatenación
let saludo = "Hola, me llamo " + nombre + ", vivo en " + ciudad + " y tengo " + edad + " años";
console.log(saludo);

// Template literals
let saludo2 = `Hola, mi nombre es ${nombre} y vivo en ${ciudad}. Tengo ${edad} años`;
console.log(saludo2.toUpperCase());
document.getElementById("hola").textContent=saludo;