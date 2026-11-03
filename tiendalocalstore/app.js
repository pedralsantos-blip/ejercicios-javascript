let alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Andres", edad: 27 }
];

// RECUPERAR (una línea)
alumnos = JSON.parse(localStorage.getItem("alumnosGuardadosLocal")) || alumnos;

const contenedorAlumnos = document.getElementById("alumnos");

function guardarAlumnosLocal() {
  localStorage.setItem("alumnosGuardadosLocal", JSON.stringify(alumnos));
}

function mostrarAlumnos() {
  contenedorAlumnos.innerHTML = "";

  for (const alumno of alumnos) {
    contenedorAlumnos.innerHTML += "Nombre: " + alumno.nombre + " - Edad: " + alumno.edad + "<br>";
  }
}

function agregarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  if (nombre === "" || edad === "") {
    alert("Rellena el nombre y la edad");
    return;
  }

  alumnos.push({ nombre: nombre, edad: Number(edad) });
  guardarAlumnosLocal();

  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";

  mostrarAlumnos();
}

mostrarAlumnos();