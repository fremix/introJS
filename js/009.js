/**
 * Operaciones en los arreglos
 */

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.JS'];


// Anadir elementos al array
// tecnologias.push('GraphQL'); // Añade al final del array
// tecnologias.unshift('GraphQL'); // Añade al final del array

// const nuevoArreglo = [...tecnologias, 'GraphQL']; // No modifica el arreglo original y se agrega al final
// const nuevoArreglo = [ 'GraphQL', ...tecnologias]; // para insertar al inicio, solo cambia de ubicacion el spread operator

// Eliminar elementos del array
// tecnologias.pop(); // elimina del final
// tecnologias.shift(); // elimina del inicio
// tecnologias.splice(0, 1); // elimina de una posicion especifica, el primer numero indica el indice  
                          // y el segundo numero indica, pero en REACT No se deben utilizar


// const nuevoArray = tecnologias.filter( function (tech){ // para jugar con los arreglos, con una pequeña condision 
//    return tech == 'React'; // permite iterar sobre cada elemento para saber cuales hay, y que retorne lo que se pide
// }); // No modifica el arreglo original
//console.log(nuevoArray);


// Reemplazar elementos de array
// tecnologias[0] = 'GraphQL' // No porque modifica el areglo original

const nuevoArray = tecnologias.map( function( tech ) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
});


console.table(tecnologias);
console.table(nuevoArray);

/* Filter Unique values
const array = [1,1,2,3,5,5,1,4,5,2];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);*/


































