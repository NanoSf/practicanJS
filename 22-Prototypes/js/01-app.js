const cliente = {
    nombre: 'Einer',
    saldo: 500
};

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre,apellido, saldo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
}

const einer = new Cliente('Einer','Aponte', 2500);
console.log(einer);