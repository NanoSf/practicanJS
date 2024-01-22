//! Agregar variables privadas #nombreVariable
class Cliente{
    #nombre;

    constructor(nombre,saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    //TODO -> No requiere instancia para usarlo por que es static
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const einer = new Cliente('Einer', 6000);
console.log(einer.getNombre());
einer.setNombre('Hitman');
console.log(einer.getNombre());