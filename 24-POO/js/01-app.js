//! Class Declaration
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

//* Instanciando CLiente
const einer = new Cliente('Einer',400);
console.log(einer.mostrarInformacion());
console.log(einer);
console.log(Cliente.bienvenida());  //TODO -> No requiere instancia para usarlo por que es static

//! Class Expresion
const Cliente2 = class{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

//* Instanciando Cliente2
const einer2 = new Cliente2('Fabian', 500);
console.log(einer2.mostrarInformacion());
console.log(einer2);