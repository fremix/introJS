/** Comparacion y Operador Estricto */

const numero1 = 20;

const numero2 = '20';

/**
 *  == (   Comparacion pero no es estricto   );
 *  === (   Comparacion estricta - Revisa el valor y el tipo de dato  )
 */

if( numero1 === Number(numero2))   { /** se usa Number para modificar un tipo de dato  */
    console.log('Si son iguales');
} else {
    console.log('Son diferentes');
}



const autenticado = true;
if(autenticado) {
    console.log('Si esta autenticado');
};

const logIn = false;
if(logIn === false) {
    console.log('Desconectado');
}