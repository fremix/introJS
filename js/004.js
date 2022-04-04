/**
 * Objetos
 */

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
};

console.log(producto);
console.table(producto);

console.log( producto.nombre);
console.log( producto.precio);
console.log( producto.disponible);


// Destructuring .- Sacar de una estructura

const { nombre, precio, disponible } = producto;
console.log( disponible );
console.log( precio );
console.log( nombre );

/*  Object Literal Enhacement.- La mejora del objeto literal
    Para colocar variables que estan fuera de un objeto, colocarlas variables dentro del objeto 
    El nombre de las variables tienen que ser iguales
*/


const autenticado = true;
const usuario = 'Freddy';

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto);



