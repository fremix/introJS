/** For Loop */ //1.- indice // 2.-Se ejecuta mientras la condicion sera verdadera // 3.-incremento
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
console.warn('For Loop');
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

/** While Loop */ // Se ejecuta mientas una condicion sea evaluada como verdadera

let i = 0; // Indice // en el cero seria 20 para que realice la funcion 

/*
while ( i <= 100 ) { // Condicion
    if( i % 2 === 0){
        console.log(`El numero ${i} es PAR`);
    } 
    else {
        console.log(`El numero ${i} es IMPAR`);
    }
    i++; // Incremento
} 
console.warn('While Loop');
while( i < 10) { // primero evalua la condicion y sino es verdadera o en caso de que se cumpla, NO ejecuta el codigo
     console.log(carrito[i].nombre, carrito[i].precio)
    
     i++;
}*/



console.warn('Do While Loop');
/** Do While Loop */

do {
    console.log(i); // Ejecuta el codigo al menos una vez y despues evalua

    i++;
} while( i < 10 );


