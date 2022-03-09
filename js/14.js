/**
 * Arreglos o arrays
 */

const numeros = [10,20,30,40,50];


//const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo'];
//console.table(meses);

/**
 * const arreglo = ["Hola", 10, true, "si", null, {nombre : "Freddy", trabajo: "Desarrollador"}, [1,2,3]];
console.table(arreglo[6]);
 */

/**
 * Acceder a los valores de un arreglo
 
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

/**
 * Conocer la extension de un arreglo
 
console.log(meses.length);

// Iterador forEach
numeros.forEach( function(numero) {
    console.log(numero);
})
*/


// Agregar elementos al arrays

//numeros[5] = 60; // Esta forma NO es muy comun

numeros.push(61,71,81); // Puede agregar elementos por linea o varios en la misma linea separados por una coma, // agrega al final del arreglo
numeros.unshift(-10,-20,-30); // agrega al inicio del arreglo

console.table(numeros);

// Eliminar elementos del arreglo
 const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo'];
// meses.pop(); // elimina el ultimo elemento
// meses.shift(); // elimina el primer elemento

// meses.splice(2,1); // elimina una ubicacion especifica a partir de indice y cuando lugares (2, 1)
// console.table(meses);


// Rest Operator o Spread Operator
const nuevoArreglo =['Junio',...meses]; // es la mejor forma de hacerlo, porque se modifica el arreglo original
console.table(nuevoArreglo);

// Hoy en dia se recomienda no modificar los arreglos originales