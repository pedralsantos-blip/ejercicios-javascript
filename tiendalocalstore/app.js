let alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Andres", edad: 27 }
];

const contenedorAlumnos = document.getElementById("alumnos");

function guardarAlumnosLocal() {
  const alumnosJson = JSON.stringify(alumnos);
  localStorage.setItem("alumnosGuardadosLocal", alumnosJson);
  console.log("Guardado:", alumnosJson);
}

function cargarAlumnosLocal() {
  const guardados = localStorage.getItem("alumnosGuardadosLocal");

  if (guardados) {
    alumnos = JSON.parse(guardados);
    console.log("Cargado:", alumnos);
  }
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

cargarAlumnosLocal();
mostrarAlumnos();