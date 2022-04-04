/** Metodos de propiedad */

const reproductor = { // Objeto
    reproducir: function(id) { // Funcion
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crecarPlayList: function(nombre) {
        console.log(`Creando la PlayList: ${nombre}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la PlayList: ${nombre}`);
    }

}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id} `);
}



reproductor.reproducir(3850);
reproductor.pausar();
reproductor.borrarCancion('wall');
reproductor.crecarPlayList('Metallica');
reproductor.reproducirPlayList('Metallica');

