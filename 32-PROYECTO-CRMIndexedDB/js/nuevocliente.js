(function(){

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    function validarCliente(e){
        e.preventDefault();

        //* Leer todos los input
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //* Crear un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }

        //* Creando nuevo cliente
        creandoNuevoCliente(cliente);

        //* Reiniciando el formulario
        formulario.reset();
    }

    function creandoNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);

        transaction.onerror = () => {
            imprimirAlerta('Error al agregar', 'error');
        };

        transaction.oncomplete = () => {
            imprimirAlerta('El Cliente se ágrego correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };
    }
})();