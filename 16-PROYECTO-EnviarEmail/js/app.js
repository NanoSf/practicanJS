document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    // Asignar eventos
    inputEmail.addEventListener('input', validar);

    inputAsunto.addEventListener('input', validar);

    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetFormulario();
    });

    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.remove('hidden');

        //* Pasado sierto tiempo ejecuta una funcion
        setTimeout(()=>{
            spinner.classList.add('hidden');
            resetFormulario();

            //! Crear una alerta
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold','text-sm','uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);
            setTimeout(()=>{
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    function validar(e){
        if (e.target.value.trim() === '') {
            mostarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id == 'email' && !validarEmail(e.target.value)) {
            mostarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto email
        comprobarEmail();
    }

    function mostarAlerta(mensaje, referencia){
        // Limpiar alerta
        limpiarAlerta(referencia);

        //Generar alerta HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white', 'p-2', 'text-center');

        // Inyectar error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        // Comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')){ // Object.values combierte el objeto a un arreglo
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        
    }

    function resetFormulario(){
        //Limpiando formulario
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});