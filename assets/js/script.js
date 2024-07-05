/* constantes y variables */

const funcionVideo = (function () {
    function setVideo(url, id){
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }
    return {
        reproducirVideo: function (url, id) {
            setVideo(url, id);
        }
    };
})(); /* funcion autoejecutable "cerrar con ();" */


const datos = [
    {
        id: 'peliculas',
        url: 'https://www.youtube.com/embed/MDo5zdwR0m4?si=T5ggnkeS3WsJSyFf'
    },
    {
        id: 'series',
        url: 'https://www.youtube.com/embed/jBhBrZbDPj0?si=Rrq2qlz3wbZvJ8sY'
    },
    {
        id: 'musica',
        url: 'https://www.youtube.com/embed/KblaoTY5mik?si=mjBXKA4EOlmOf6x-'
    }
]

/* creacion de clases "padre" */
class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set url(nuevaUrl) {
        this._url = nuevaUrl;
    }
    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
};

/* creacion de clases "hija" */

class Reproductor extends Multimedia{    /* extends es para utilizar informacion de la clase padre anterior */
    constructor(url, id){
        super(url);   /* el super es para sacar el valor del this._ del padre */
        this.id = id;
    }
    playMultimedia(){
        funcionVideo.reproducirVideo(this.url, this.id);
    }
}



const pelicula1 = new Reproductor(datos[0].url, datos[0].id);
const serie1 = new Reproductor(datos[1].url, datos[1].id);
const musica1 = new Reproductor(datos[2].url, datos[2].id);

pelicula1.playMultimedia();
serie1.playMultimedia();
musica1.playMultimedia();