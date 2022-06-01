/** Notificacion API*/

const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then( resultado => console.log(`El resultado es ${resultado}`) );
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/fr3w1.jpg',
        body: 'Código con Freddy, los mejores tutoriales'
    });
}

