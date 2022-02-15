/** Tipo de datos
 * 
 *  String o cadenas de texto
 */

const producto = 'Monitor de 20\" pulgadas'; // se necesita escapar las comillas
const producto2 = String ('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');

console.log( typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);



/** Metodos para los String */

const tweet = 'Aprendiendo JavaScript con el Curso de  Desarrollo Web Completo, impartido por Juan de la Torre'; // se necesita escapar las comillas
const producto2 = String ('Monitor HD');
const email = 'correo@correo.com'

// length: para medir la extension de String
console.log(tweet.length);
console.log(producto2);

// indexOf: para comprobar si una palabra existe en una cadena de texto
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet')); // Cuando el resultado es negativo significa que no puedo encontrar lo que se busca
console.log(email.includes('@'));

// Include (retorna true or false cuando se encuentra lo que se busca)

console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));










