let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => crearCliente() ,5000);
});

function crmDB(){
    //* Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //* Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la BD');
    }

    //* Se se creo bien
    crmDB.onsuccess = function(){
        console.log('BD creada');

        DB = crmDB.result;
    }

    //* Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const bd = e.target.result;

        //TODO: Crear tabla
        const objectStore = bd.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //TODO: Crear columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'correo', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas Creadas');
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 3506750572,
        nombre: 'Einer',
        correo: 'efapontec@gmail.com'
    }

    //TODO: add -> Crear
    //TODO: put -> Actualizar
    //TODO: delete -> Eliminar
    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}