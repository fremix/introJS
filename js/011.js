/**
 * Iteradores en Arrays
 */

const tecnologias = [' HTML', ' CSS', ' JavaScript', ' React', ' Node.JS'];

// forEach, se ejecuta una vez por cada elemento que hay en el arreglo
// forEach - Permite acceder a cada elemento del Array

const arrayForeach = tecnologias.forEach( function ( tech ) {
    return tech; // el return retorna los valores mientras se va interando en ellos dentro del arreglo
    // permite listar los elementos del arreglo
})

const arrayMap = tecnologias.map (function (tech) { // MAP se utiliza mas en REACT 
                                   // Crea un nuevo array
    return tech; // el return retorna los valores mientras se va interando en ellos dentro del arreglo
})

console.log(arrayForeach);
console.log(arrayMap);