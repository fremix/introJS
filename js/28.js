/** CLASSES */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
  }

}

const producto2 = new Producto('Monitor Curvo de 49"', 800); // Instanciar la clase //  const producto = new Producto(); // Instanciar la clase (Producto)
const producto3 = new Producto("laptop", 300);

/** HERENCIA */

class Libro extends Producto{
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }

  formatearProducto() {
    return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
  }

}

const libro = new Libro("JavaScript, La Revolucion.", 120, "6168516848");
console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto() );


