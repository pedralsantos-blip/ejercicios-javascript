const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Andres", edad: 27 }
];

const contenedorAlumnos = document.getElementById("alumnos");

for (const alumno of alumnos) {
  contenedorAlumnos.innerHTML += "Nombre: " + alumno.nombre + " - Edad: " + alumno.edad + "<br>";
}