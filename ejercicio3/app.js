let precio=25;
let cantidad=3;
let descuento=5;

//operador de suma//
let suma=precio+precio;
console.log(suma);

//operador de resta//
let resta=suma-precio;
console.log(resta);

resta=precio-descuento;
console.log(resta);//resta ahora vale 20//

//operador de multiplicación//
let multiplicación=precio*cantidad;
console.log(multiplicación);//multiplicacion ahora vale 75//

//operador de división//
let division=precio/cantidad;
console.log(division);//division ahora vale 8.333333333333334//

//operador de modulo//
let modulo=precio%cantidad;
console.log(modulo);//resto de la division de precio entre la cantidad//

//IVA//
let iva=(precio*21)/100;//precio * 0,21//
console.log(iva);//iva ahora vale 5.25

let precioTotal=precio+iva;
console.log(precioTotal);//precioTotal ahora vale 30.25


//operadores de asignación//
let carrito;
carrito=0;
console.log(carrito);//carrito ahora vale 0//

carrito-=5;//carrito ahora vale -5//
console.log(carrito);//carrito vale 0//

