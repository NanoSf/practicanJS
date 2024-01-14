//! Heredar el prototype
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Modificando el prototype de cliente
//TODO: Estos metodos van a ser explusivos de Cliente
//TODO: OJO se usa funcion porque permite usar el this para acceder a los datos, con un arrow function se va a la ventana global y marca error
Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platium';
    }else{
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

//TODO: Heredando de Cliente a Persona
//* Heredamos el constructor
function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//* Heredamos los metodos
Persona.prototype = Object.create(Cliente.prototype);

//* Perdemos rl constructor al heredar los metodos, asi que lo asignamos nuevamente
Persona.prototype.constructor = Cliente;

//Instanciarlo
const einer = new Persona('Einer', 1250, 3506750572);
console.log(einer);
console.log(einer.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(einer.mostrarTelefono());