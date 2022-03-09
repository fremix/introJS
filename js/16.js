// Funciones en JS

// Declaracion de la Funcion
/**
 * 1.- Lleva la palabra reservada function
 * 2.- Seguida de un nombre, no puede iniciar con numeros
 * 3.- Posteriormente lleva 1 parentesis, aqui se colocan los argumentos de la funcion
 * 4.- Se agregan llaves, todo lo que se coloque dentro de las llaves es lo que pertenece a la funcion
 */

 sumar();
function sumar() {
    console.log(10 + 10);
}


// Expresion de la funcion
const sumar2 = function() {
    console.log( 3 + 3);
}
sumar2(); // si se cambia el llamado de la funcion, va a marcar un error por que se considera como una variable


// IIFE sirve para que las variables no se mezclen con otro archivo
(function() {
   // console.log( 'Esto es una FUNCION');
})();

