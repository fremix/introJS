// Objetos
//"use strict" // correr JS en modo estricto
const producto = {
    nombreProducto: "Monitor de 14 Pulgadas",
    precio: 300,
    disponible: true
}

// Congela al objeto, NO permite eliminar, ni cambiar un valor, ni agregar nuevas propiedades
// Object.isFrozen(producto);

// Congela al objeto, NO permite eliminar, ni agregar nuevas propiedades, pero si permite cambiar los valores existente
Object.seal(producto);

// producto.imagen = 'imagen.jpg';
// producto.peso = '15 kg'

console.log(Object.isSealed(producto));

console.log(producto);