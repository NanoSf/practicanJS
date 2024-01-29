const obtenerCliente = () => {
    const nombre = 'Einer';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();