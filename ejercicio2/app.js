let pelicula = prompt("Introduce la pelicula");
let director = prompt("Introduce el director");
let anio = Number(prompt("Introduce el año de la pelicula"));

// Concatenación
let opinion = "Tu película favorita es " + pelicula + ", tu director favorito es  " + director + " que rodó la pelicula en el año " + anio +"." ;
console.log(opinion);

// Template literals
let opinion2 = `Tu película favorita es ${pelicula}, tu director favorito es ${director}, que rodó la pelicula en el año ${anio} `;
console.log(opinion2.toUpperCase());
document.getElementById("opinion").textContent=opinion2;