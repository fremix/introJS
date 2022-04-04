/**
 * Objetos - Destructuracion con 2 o más objetos
 */

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Freddy',
    premium: true
}

const{ nombre, precio, disponible} = producto;
const{ nombre: nombreCliente, } = cliente; // para crear un alias cuando las variables tiene el mismo nombre

console.log( nombre );
console.log( nombreCliente );





