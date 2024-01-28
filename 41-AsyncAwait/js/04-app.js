function descargandoNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes.....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargandoNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos.....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}


const app = async () => {
    try {
        const respuesta = await Promise.all([descargandoNuevosClientes(), descargandoNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
