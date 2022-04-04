/**
 * Objetos - Manipulacion o Modificacion los valores de un objeto
 */

const producto = {
    nombre: 'Tablet',
    precio:  300,
    disponible: true
}

// Para proteger el objeto, no permite añadir ni eliminar
Object.freeze(producto);

// Permite modificar las propiedades existentes, no permite añadir ni eliminar
Object.seal(producto);

// Reescribir un valor
producto.nombre = 'IPhone X';

// Sino existe lo va a añadir
producto.imagen =  'imagen.jpg';

// Para eliminar una propiedad
delete producto.disponible;

console.table(producto);