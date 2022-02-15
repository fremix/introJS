const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

/*  
 * unir dos objetos o arrays con spread operator 
 */

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);