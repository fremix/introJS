/**
 * Funciones - Function Expression
 */
/*
function sumar( numero = 0, numero2 = 0) { // Function declaration
    console.log( numero + numero2);
}
*/


const sumar = function(numero = 0, numero2 = 0) { // Function Expression
    return numero + numero2;
}
const resultado = sumar(30);

console.log(resultado);
