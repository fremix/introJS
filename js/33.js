/** Fetch API */

async function obtenerEmpleados() {

     const archivo = 'empleados.json';
/* // Esta forma de hacerlo con Promises
    fetch(archivo)
        .then( resultado => resultado.json())
        .then( datos => {
            // console.log(datos.empleados);

            const { empleados } = datos; // Destructuring
            //console.log(empleados);

            empleados.forEach( empleado => {
                console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });
        })*/

        const resultado = await fetch(archivo);
        const datos = await resultado.json();
        console.log(datos);

}
obtenerEmpleados();


