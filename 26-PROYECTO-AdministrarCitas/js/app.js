//! Variables
//TODO: Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//TODO: Campos interfaz del usuario
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

//! Clases
class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizado){
        this.citas = this.citas.map(cita => cita.id === citaActualizado.id ? citaActualizado : cita);
    }
}

class UI{
    imprimirAlerta(mensaje, tipo){
        //* Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12');

        //* Agrega la clase segun el tipo
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //* Mensaje de error
        divMensaje.textContent = mensaje;

        //* Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //* Quitar la alerta despues de 5 segundos
        setTimeout(()=>{
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}){

        //* Limpiar el HTML previo
        this.limpiarHTML();

        //* Iteramos sobre el arreglo y creamos los elementos
        citas.forEach( (cita) => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //* Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span>${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span>${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${sintomas}
            `;

            //* Boton de eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            `;

            //* Con arrow function
            // btnEliminar.onclick = () => {
            //     eliminarCita(id);
            // };

            //* Con function
            btnEliminar.onclick = function(){
                eliminarCita(id);
            };

            //* Boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            `;

            btnEditar.onclick = () => cargarEdicion(cita);

            //* Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //* Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

//! Instancias de clases
const ui = new UI();
const administrarCitas = new Citas();

//! Event Listener
eventListener();
function eventListener(){
    mascotaInput.addEventListener('blur', datosCita);
    propietarioInput.addEventListener('blur', datosCita);
    telefonoInput.addEventListener('blur', datosCita);
    fechaInput.addEventListener('blur', datosCita);
    horaInput.addEventListener('blur', datosCita);
    sintomasInput.addEventListener('blur', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

//! Objeto formulario con informacion de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

//! Funciones
//TODO: agregar datos al objeto de citas
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

//TODO: Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //* Extraer la informacion del objeto citaObj
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    //*Validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    //* Cambiando entre edicion y nueva cita
    if(editando){
        //* Mensaje de agregado correctamenta
        ui.imprimirAlerta('Editado correctamente');

        //* Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});

        //* Cambiar el texto del boton
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        //* Desactivando modo edicion
        editando = false;

    }else{
        //* Generar un id unico
        citaObj.id = Date.now();

        //* Creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        //* Mensaje de agregado correctamenta
        ui.imprimirAlerta('Se guardo correctamente');
    }

    //* Reiniciar el objeto para la validacion
    reiniciarFormulario();

    //* Resetear formulario
    formulario.reset();

    //* Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);

}

//TODO: reinicia el formulario
function reiniciarFormulario(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

//TODO: Elimina una cita segun el id
function eliminarCita(id){
    //* ELiminar la cita
    administrarCitas.eliminarCita(id);

    //* Mostrar mensaje
    ui.imprimirAlerta('La cita se elimino correctamente');

    //* Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

//TODO: Editar una cita
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas} = cita;

    console.log(mascota);
    //* Llenar los input
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //* Llebar e objeto
    llenarFormulario(cita);

    //* Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}

//TODO: llenar el formulario
function llenarFormulario({mascota, propietario, telefono, fecha, hora, sintomas, id}){
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
}
