const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error));
}

function mostrarHTML(datos) {
    console.log(datos);
    const contenido = document.querySelector('.contenido');

    let html = '';
    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href=${post_url}>Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}