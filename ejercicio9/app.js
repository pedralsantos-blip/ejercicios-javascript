//function suma(a, b) {
 // const resultado = a + b;
  //console.log(resultado);
///

//suma(3, 4); // 7
//suma(4, 4); // 8


function saludar(nombre){
    nombre=prompt("introduce tu nombre");
    document.getElementById("saludo").textContent="Hola"+nombre+"!";
    console.log("Hola, "+nombre+"!")
}