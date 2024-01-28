//? https://picsum.photos/list
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatosAsync);

//! Con fetch
function obtenerDatos() {
    fetch(url)
    .then(res => res.json())
    .then(resu => console.log(resu))
    .catch(error => console.log(error));
}

//! con Async Await
async function obtenerDatosAsync() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log('Error: ',error);
    }
}