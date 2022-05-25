/** Programación Orientada a Objetos || Prototypes*/

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/** Object Constructor */
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function( ) {
    return `El Cliente ${this.nombre}  ${this.apellido}`;
}


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
/** PROTOTYPE nos va a permitir crear funciones que solo se utilizan en un objeto en especifico*/
Producto.prototype.formatearProducto = function( ) {
    return `El producto ${this.nombre} tiene un  precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 500);
const cliente = new Cliente ('Freddy', 'Morales');


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );




