let alumnos=[];
let notas=[];
function guardarAlumno(){
    let nombre=document.getElementById("nombre").value;
    let nota=document.getElementById("nota").value;
    alumnos.push(nombre);
    notas.push(nota);
//muestra la cantidad de alumnos dentro del array alumnos
document.getElementById("contador").textContent="Alumnos registrados: "+alumnos.length;

}

//muestra las notas del array nota al pulsa mostrar notas
function mostrarNotas(){}
    let mensaje="";
    for(let i=0; i<alumnos.length; i++){
        mensaje+=alumnos[i]+":"+notas[i];

    }
       document.getElementById("mensaje").textContent+=mensaje+"\n";
