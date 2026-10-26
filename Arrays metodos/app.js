let tareas = ["Estudiar JavaScript", "Hacer ejercicios", "Repasar arrays"];
console.log("Mis tareas iniciales:", tareas);

// 1. push: añadir al final
tareas.push("Enviar actividad");
console.log("1. Tras push:", tareas);

// 2. unshift: añadir al principio
tareas.unshift("Revisar apuntes");
console.log("2. Tras unshift:", tareas);

// 3. pop: eliminar la última
tareas.pop();
console.log("3. Tras pop:", tareas);

// 4. shift: eliminar la primera
tareas.shift();
console.log("4. Tras shift:", tareas);

// 5. splice: sustituir "Hacer ejercicios"
let posicion = tareas.indexOf("Hacer ejercicios");
tareas.splice(posicion, 1, "Practicar funciones");
console.log("5. Tras splice:", tareas);

// 6. for clásico
console.log("6. Recorrido con for:");
for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);
}

// 7. for...of con "Pendiente:"
console.log("7. Recorrido con for...of:");
for (let tarea of tareas) {
    console.log("Pendiente: " + tarea);
}

// 8. forEach numerado
console.log("8. Tareas numeradas:");
tareas.forEach((tarea, indice) => {
    console.log("Tarea " + (indice + 1) + ": " + tarea);
});

// 9. map: mayúsculas sin modificar el original
let tareasMayusculas = tareas.map(tarea => tarea.toUpperCase());
console.log("9. En mayúsculas:", tareasMayusculas);
console.log("   Original intacto:", tareas);

// 10. reduce: total de caracteres
let totalCaracteres = tareas.reduce((total, tarea) => total + tarea.length, 0);
console.log("10. Total de caracteres:", totalCaracteres);