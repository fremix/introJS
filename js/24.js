/** For Loop */
/** 
for( let i = 0; i < 10; i++) {
    console.log(i);
}
for( let i = 1; i <= 50; i++){
    if ( i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
       console.log(`El numero ${i} es IMPAR` )
    }
}*/

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

for( let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre, carrito[i].precio );
}

/** While Loop */




/** Do While Loop */