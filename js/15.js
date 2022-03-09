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
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
       // console.log('Marzo si existe');
    }  
});

// Includes, equivalente al codigo anterior (forEach), funciona bien en un arreglo plan, pero no con arreglo de objetos
let resultado = meses.includes('Marzo');
//console.log(resultado);

// Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
});
//console.log(resultado);

const persona = {
    nombre: 'freddy',
    appat: 'morales',
    apmat: 'izquierdo',
    edad:   45,
    empleoActual: 'desempleado'
};
// console.table(persona);

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

//console.log('Total a pagar es: ', resultado);

// Filter: sirve para filtrar un elemento especifico: una excepto estos, estos excepto este, etc.

resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular';
});


console.log(resultado);
