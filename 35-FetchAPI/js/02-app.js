const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(res => res.json())
        .then(empleado => mostrarHTML(empleado))
        .catch(error => error);
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}