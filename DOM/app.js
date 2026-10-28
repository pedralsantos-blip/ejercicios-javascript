document.getElementById("saludo").textContent="Hola este es un saludo";


let muchosParrafos=document.querySelector("mensaje");
console.log(muchosParrafos);

muchosParrafos.forEach(parrafo=>{
    parrafo.textContent="Soy un parrafo capturado por un querySelector"
});