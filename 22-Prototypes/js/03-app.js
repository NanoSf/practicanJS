//! Creando prototype

function Cliente(nombre,apellido, saldo){
    this.nombre = nombre;
    this.apellido = apellido;
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
    return `Nombre: ${this.nombre} ${this.apellido}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

// Instanciando
const pedro = new Cliente('Pedro','Picapiedra', 6000);
console.log(pedro.tipoCliente());;
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.saldo);
console.log(pedro);
