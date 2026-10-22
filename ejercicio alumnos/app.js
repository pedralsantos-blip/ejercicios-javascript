let alumnos=[];
let notas=[];

function guardarAlumno(){
    let nombre=document.getElementById("nombre").value;
    let nota=document.getElementById("nota").value;
} 
 if (nombre === "") {
    document.getElementById("mensaje").textContent = "Escribe un nombre.";
    return;
  }
  if (textoNota === "" || nota < 0 || nota > 10) {
    document.getElementById("mensaje").textContent = "Escribe una nota entre 0 y 10.";
    return;
  }

