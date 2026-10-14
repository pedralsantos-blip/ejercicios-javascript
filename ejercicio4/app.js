let a=7;
let b=3;
let c=a<b;
console.log(c);

c=a<b;
console.log(c);

let d;
d= 7!=="7";///esta evita conversiones///
console.log(d); /// true///

//puede pasar si tiene llave o permiso//
let puedePasar;
let llave=true;
let permiso=false;
let jefe=true;

puedePasar=llave||permiso;//or alternativa.

console.log(puedePasar);


puedePasar=(llave&&permiso)||jefe;

cosole.log(puedePasar);


let estaLloviendo=false;
let puedSalirSinParaguas=!estaLloviendo;

console.log(puedoSalirSinParaguas);

