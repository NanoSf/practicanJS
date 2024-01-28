const descargarClientes =() => {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de Clientes se descargo correctamente');
            }else{
                reject('Error en la conexion');
            }
        }, 3000);
    });
}

// Async await
//* Esto hace que el codigo espere hasta que se ejecute el promise o el fetch
//* El resolve se ejecuta en el try y el reject en el catch

//! Async -> Se coloca async en donde se va a ejecutar el promise o fetch o algun servicio
//! En lugar de usar .then() se almacena la respuesta en una variable

//TODO: Await -> Se utiliza en la parte que va a esperar a que se ejecute el promise o fetch
const ejecutar = async () => {
    try {
        console.log(1+1);

        const respuesta = await descargarClientes();

        console.log(2+2);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();