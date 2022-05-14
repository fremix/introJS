/** ForEach -- Map **/ // Solo se puede ejecutar en arreglos


const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
    //{ precio: 300, nombre: 'Reloj', color: 'Plata'}
]

/** ForEach **/
console.warn('ForEach');
const arreglo1 = carrito.forEach(producto => console.log ( producto ));



/** Map 
console.warn('Map');
const arreglo2 = carrito.map( producto => producto.nombre);**/

const arreglo2 = carrito.map ( producto => `${producto.nombre} -- ${producto.precio}`)

 console.log(arreglo1);
console.log(arreglo2);















/*const dayOfYear = date => 
    Math.floor(( date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    

    dayOfYear( new Date() );

    */