/** Objetos */

/*
const nombreProducto = 'Monitor de 20 Pulgadas',
      precio = 300,
      disponible = true;
*/


const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto['precio']);


// para agregar nuevas propiedades
producto.imagen = 'imagen.jpg'

// Para eliminar algun propiedad
delete producto.disponible;

console.log(producto);








