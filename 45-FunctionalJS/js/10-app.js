//! Composition: Alternativas de las clases, creas los metodos y se los asignas a los funciones
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregandoEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre,email,empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}

function Empleado(nombre,email,puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}

const cliente = Cliente('Einer',null,'Desarollando');
cliente.mostrarNombre();
cliente.agregandoEmail('efapontec@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('===============================');

const empleado = Empleado('Fabian',null,'Programador');
empleado.mostrarNombre();
empleado.agregandoEmail('efcubidesp@gmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();
