/* Tipos de datos 
   Undefined 
let cliente = 20;

console.log( typeof cliente);
console.log( cliente);

 // Boolean

 const descuento = true;

 console.log(typeof descuento);
 console.log( descuento);



// Number

const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100;

console.log( typeof numero1);
console.log( typeof numero2);
console.log( typeof numero3);



// String o Cadenas de Texto

const alumno = "Freddy";
let producto = 'Monitor de 20 pulgadas';

const numero = "30";
const numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);



// BigInt

const numeroGrande = BigInt (984168498461681816816819);

const cantidadGrande = 9871351987132198491984n;

console.log(typeof numeroGrande);
console.log(typeof cantidadGrande);

// Coercion.- cambiar el tipo de dato
console.log( numero + Number(numeroGrande));

const numero = "30";
const numero2 = 30;

console.log( typeof String(numero2));
console.log( typeof Number(numero));


// Symbol.- Es un tipo de datos unico

const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol); // false: pregunta de examen

if (primerSymbol !== segundoSymbol) {
    console.log('Es false');
} else {
    console.log('Es true');
}

console.log( primerSymbol.valueOf());
console.log( segundoSymbol.valueOf());
*/

// Null

const descuento = null; // Tipo objeto

console.log(descuento);
console.log( typeof descuento); // Tipo objeto

