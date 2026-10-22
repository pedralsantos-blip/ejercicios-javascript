const colores=["rojo","verde","azul"]
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
document.getElementById("resultado").textContent = colores[1];

colores[1]="negro";/////cambia el elemento del array
console.log(colores);
colores[3]="rosa";///agrega un elemento nuevo al array
console.log(colores);

console.log(colores.length);

let frutas=[];
//recorre los elemntos del array{}
for(let i=0; i<frutas.length; i+i+1){
    console.log(colores[i]);
}

//me devuele los elementos del array
for (let elementoDelArray of colores){
    console.log(elementodelArray);
}

//me devuelve los indices del array
for(let elementoDelArray in colores){
    conosole.log(elementoDelArray);
}

frutas.push("manzana");