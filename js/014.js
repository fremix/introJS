/**
 * Funciones -- Arrow Functions


const sumar = function() {
    console.log(numero + numero2 );
}

const resta = function() {
    console.log( numero - numero2);
}

const multipla = function() {
    console.log(numero * numero2);
}

const divide = function() {
    console.log(numero / numero2);
}
 */
/** Arrow Functions */

const sumar = ( numero = 0, numero2 = 0) => {
    console.log( numero );
}
sumar(30, 30);

const resta = ( numero = 0, numero2 = 0) => {
    console.log( numero - numero2);
}
resta(50, 30);

const multipla = ( numero = 0, numero2 = 0) => {
    console.log( numero * numero2);
}
multipla(30, 50);

const divide = ( numero = 0, numero2 = 0) => {
    console.log( numero / numero2);
}
divide(150, 50);



