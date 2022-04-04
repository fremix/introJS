/**
 * Funciones - Function Declaration


function sumar() {
    console.log( 2 + 2);

}
sumar();

function restar() {
    console.log( 8 - 5 );
}
restar();

function multiplicar() {
    console.log( 3 * 7);
}
multiplicar();

function dividir() {
    console.log( 9 / 3);
}
dividir()


// Funciones inteligentes

function sumar(numero = 0, numero2 = 0 ) { // Lo que esta entre los parentesis se le conoce como parametro
    //console.log(numero2);
    console.log(numero + numero2);
}
sumar(10, 20); // Estos valores aqui dentro del parentesis, se le conoce como argumentos
sumar(2,3);
sumar(100);
sumar();
 

function sumar(numero = 0, numero2 = 0) {
    return [numero + numero2, 'Hola Mundo']
}
 const [resultado, holaMundo] = sumar(20, 30);

 console.log(resultado);
 console.log(holaMundo);
*/

function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundito Cruel'
    }
}

const {resultado, mensaje} = sumar(20, 30); // Objetect destructuring

console.log(resultado);
console.log(mensaje);

const [resultado1, setResultado] = useState(0);

