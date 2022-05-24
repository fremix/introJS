/** Programación Orientada a Objetos */

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/** Object Constructor */
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, 'true');
const producto3 = new Producto('Laptop"', 500, 'false');
const producto4 = new Producto('Telefono M10"', 1500, 'false');
const producto5 = new Producto('Nintendo"', 800, 'true');

console.log(producto2, producto3, producto4, producto5);


