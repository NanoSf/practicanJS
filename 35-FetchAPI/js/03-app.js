const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleados.json')
    .then(res => res.json())
    .then(empleados => empleados.forEach(empleado => console.log(empleado)))
    .catch(error => console.log(error));
}