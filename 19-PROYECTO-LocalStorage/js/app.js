//! Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//! Event Listener
eventListener();

function eventListener(){

    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        
        crearHTML();
    })
}



//! Funciones
function agregarTweet(e){
    e.preventDefault();

    // Textarea 
    const tweet = document.querySelector('#tweet').value;

    //* 1. validando textarea
    if(tweet == ''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    //* 2. agregando al arreglo de tweet
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];

    //* 3. Crear HTML
    crearHTML();

    //* Reiniciar el formularii
    formulario.reset();
}


//TODO: Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertando en el dom
    const contenido = document.querySelector('#contenido');

    const contieneError = Array.from(contenido.children).some(e => e.classList.contains('error'));

    //* Valida que no cotenga un error previo
    if(!contieneError){
        // Agrega el elemento
        contenido.appendChild(mensajeError);

        // Elimina la alerta despues de 2 segundos
        setTimeout(()=>{
            mensajeError.remove();
        }, 3000);  
    }
}

//TODO: Muestra el listado de tweet
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //* Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //* Funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTeewt(tweet.id);
            }

            //* Creamos el HTML
            const li = document.createElement('li');

            //* Agregamos el texto
            li.innerText = tweet.tweet;

            //* Asignar el boton
            li.appendChild(btnEliminar);

            //* Insetamos la lista al DOM
            listaTweets.appendChild(li);
        });
    }

    //* Se guarda en localStorage
    sincronizarStorage();
}

//TODO: Guardando en localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//TODO: Borrando Teewt
function borrarTeewt(id){
    //* Se elimina el elemento de la lista
    tweets = tweets.filter(tweet => tweet.id !== id);

    //* Se crea nuevamente la lista
    crearHTML();
}

//TODO: Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}