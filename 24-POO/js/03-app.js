class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //TODO -> No requiere instancia para usarlo por que es static
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

//! HERENCIA
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //TODO -> Rescribe el metodo del padre al tener el mismo nombre
    static bienvenida(){
        return `Bienvenido al cajero de empresas`;
    }
}

//* Instanciando CLiente
const einer = new Cliente('Einer',400);
const empresa = new Empresa('nanosoft.m', 5000, 3506750572, 'Desarollo');
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());