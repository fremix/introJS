/** Validar mas de una condicion */

const saldo = 600;
const pagar = 700;
const tarjeta = true;

/**
 * || Al menos una debe cumplirse
 * && Todas deben cumplirse
 */



if( saldo > pagar && tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No, No puedes pagar');
}


/* aqui se cumple una condicion
if( saldo > pagar || tarjeta ) {
    console.log('Puedes pagar');
} else {
    console.log('No, no puedes pagar');
}

const saldo = 600;
const pagar = 1000;
const transferencia = true;
const tarjeta = 1000;

if(saldo > pagar) { // se cumplen, una y otra condicion
    console.log('Puedes pagar con tu saldo');
} else if( tarjeta === 999 ) {
    console.log('Puedes pagar con tu tarjeta');
} else if( pagar === 1000) {
    console.log('Puedes pagar con transferencia');
} 
else {
    console.log('No, no puedes pagar');
}

// 

if( saldo > pagar && tarjeta ) {
    console.log('Puedes pagar ');
} else {
    console.log(' No, No puedes pagar ');
}
*/








