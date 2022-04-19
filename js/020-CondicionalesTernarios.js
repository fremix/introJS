/** Condicionales - Ternarios 
const autenticado = true;

autenticado ? 
console.log('Usuario autenticado') :
console.log('No autenticado, dirigir hacia el login') ;
    

const casado = false;

!casado ? 
    console.log('Estas casado, :(') :   
    console.log('Felicidades, eres soltero');

const edad = 17;

edad >= 18 ? 
    console.log('Eres mayor de edad') : 
    console.log('No eres mayor de edad');*/

/** Doble Ternario */

const saldo = 600;
const pagar = 1000;
const tarjeta = true;

saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ? console.log('Puedes pagar con tarjeta') :    
        pagar >= 1000 ? console.log('Paga con transferencia'): 
        console.log('No, no puedes pagar');



