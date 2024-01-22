//! Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//! Eventos
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//! Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularGastado();
    }

    calcularGastado(){
        const gastado = this.gastos.reduce((total,gasto) => total+gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularGastado();
    }
}

class UI{
    insertarPresupuesto({presupuesto, restante}){
        //* Agregamos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar HTML
        setTimeout(()=> divMensaje.remove(), 3000);
    }

    mostrarGastos(gastos){
        // Eliminar HTML previo
        this.limpiarHTML();
        // Iterar sobre los gastos
        gastos.forEach(({cantidad, nombre, id}) => {
            // Crear Li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between aling-items-center';
            nuevoGasto.dataset.id = id; //* -> Atributo personalizado

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`;

            // Boton para borar
            const btnBorrar = document.createElement('button');
            btnBorrar.innerHTML = 'Borrrar &times';
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto({presupuesto: presupuestoOBJ, restante}){
        const restanteDiv = document.querySelector('.restante');

        if( (presupuestoOBJ / 4) > restante ){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if( (presupuestoOBJ / 2) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-warning', 'alert-danger');
            restanteDiv.classList.add('alert-success');
        }


        // Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }

        restanteDiv.classList.add('alert-success');
    }
}

const ui = new UI();
let presupuesto;

//! Funciones
function preguntarPresupuesto(){
    const presupustoUsuario = prompt('¿Cual es tu presupuesto?');

    if(presupustoUsuario === '' || presupustoUsuario == null || isNaN(presupustoUsuario) || presupustoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupustoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

// Añade gasto
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validando
    if(nombre === '' || cantidad ===''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida','error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = {nombre,cantidad, id: Date.now()};

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje todo OK
    ui.imprimirAlerta('Gasto agregado correctamente');

    const {gastos, restante} = presupuesto;
    //Imprimir los gastos
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id){
    // ELimina del objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    ui.mostrarGastos(presupuesto.gastos);
    ui.actualizarRestante(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);
}