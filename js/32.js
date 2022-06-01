/** Async -- await */

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando cliente... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron Descargados....');
        }, 5000 );
    })
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log('algo'); // Todo código que este despues del await se ejecutará hasta que el await sea completado
        console.log(resultado);  
    } catch (error) {
        console.log(error);
    }
    
}

app();

