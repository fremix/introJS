/** Destructuracion de Objetos */

const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

/* Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

 console.log(precioProducto);
 console.log(nombreProducto);
 */


/** Destructuring
 *  Siempre que se usa destructuracion se colocan llaves antes del =
 
const {precio, nombreProducto} = producto;
//const {} = producto;

console.log(precio);
console.log(nombreProducto);

/**
 * Destruturing
 */

const {precio, nombreProducto} = producto;

console.log('precio: ',precio);
console.log('nombre del producto: ',nombreProducto);

