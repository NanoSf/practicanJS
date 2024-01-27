const cargarTxt = document.querySelector('#cargarTxt');
cargarTxt.addEventListener('click', obtenerdatos);

function obtenerdatos() {
    fetch('data/datos.txt')
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        .then(datos => console.log(datos))
        .catch(error => console.log(error));
}