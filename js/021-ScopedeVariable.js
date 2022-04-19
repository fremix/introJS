/** Scope de variables */

const precio = 300; // Solo esta declarada, pero si no se invoca, no se muestra


function unaFunction() {
    const precio = 600;

    console.log(precio);

}

console.log(precio); // Muestra  precio que esta fuera de la funcion

unaFunction(); // muestra precio que esta dentro de la funcion









