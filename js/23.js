/**  Switch **/

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;    
    case 'bitcoin':
        console.log('El pagaste será con BITCOIN');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}














