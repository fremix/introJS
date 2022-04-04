/**
 * Unir 2 objetos o mas en un solo objeto
 */

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const tienda = {
    nombre: 'Tabasco I',
    descuento: 20,
    activo: false
}

// producto.cliente = cliente; modifica

//const nuevoObjeto = Object.assign(producto, cliente); // No
const nuevoObjeto2 = { // forma
    producto: {...producto}, 
    cliente: {...cliente},
    tienda: {...tienda}
};

console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);
console.log(tienda);
















