/**
 * Otros Arrays Methods Utiles
 */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
const familia = ['Diegui', 'Valeria', ' Jesus', ' Anel', 'Fr3m1'];
const numeros = [10, 20, 30, 140];

let nuevoArray;

// filter .- Trae los que cumplan o los que sean diferentes a la condicion que se coloque aqui abajo
nuevoArray = tecnologias.filter( tech => tech !== 'React');

/* Includes .- Podemos comprobar si un elemento existe en el Array
const resultado = tecnologias.includes('GraphQL'); */

/* Some .- Devuelve si al menos uno elementos cumple con la condicion 
const resultado = numeros.some( numero => numero > 15);*/

/* Find .- Devuelve el primer elemento que cumpla la condicion
const resultado = numeros.find( numero => numero > 25 );*/

/**Every .- Retorna true o false si todos cumplen la condicion 
const resultado = numeros.every( numero => numero > 5)*/

/**Reduce 
const resultado = numeros.reduce( (total, numero) => numero + total, 0);
const resultado = numeros.reduce( (total, numero) => numero + total, 0);*/

/** Filter .- Crea un nuevo array en base a una condicion 
const resultado = tecnologias.filter( tech => tech !== 'NodeJS');
const resultado = numeros.filter( numero => numero == 140);*/

/** forEach 
tecnologias.forEach( tech => console.log( tech));
familia.forEach( (fami, index) => console.log( index ));
Cuando se le agregan dos o mas parametros, se tiene que agregar parentesis y se tiene acceso al index

*/

/** Map */
const arrayMap = tecnologias.map( tech => tech);

console.log(arrayMap);
