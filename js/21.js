/** Arrow Functions */

const sumar2 = (n1, n2) => console.log( n1 + n2);

sumar2(5, 10);

/** Si solo es una sola linea, los parentesis y las llave son opcionales */
const aprendiente = tecno => // console.log( `Aprendiente ${ tecno }`); 
aprendiente('JavaScript');
 

// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500 },
    {nombre: 'Television 50 Pulgadas', precio: 700 },
    {nombre: 'Tablet', precio: 300 },
    {nombre: 'Audifonos', precio: 200 },
    {nombre: 'Teclado', precio: 50 },
    {nombre: 'Celular', precio: 500 },
    {nombre: 'Bocinas', precio: 300 },
    {nombre: 'Laptop', precio: 800 },
    {nombre: 'IphoneX', precio: 150 },
];

// forEach: para verificar si un elemento existe, se ejecuta al menos una vez por cada elemento
meses.forEach( mes => {
    if (mes == 'Marzo') {
       // console.log('Marzo si existe');
    }  
});

// Some ideal para arreglo de objetos
let resultado;
resultado = carrito.some( producto => producto.nombre === 'Celular'
);
// console.log(resultado);

const persona = {
    nombre: 'freddy',
    appat: 'morales',
    apmat: 'izquierdo',
    edad:   45,
    empleoActual: 'desempleado'
};
// console.table(persona);

// Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

//console.log('Total a pagar es: ', resultado);


// Filter: sirve para filtrar un elemento especifico: una excepto estos, estos excepto este, etc.

resultado = carrito.filter( producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.nombre !== 'Celular');

console.log(resultado);

/*
*/


