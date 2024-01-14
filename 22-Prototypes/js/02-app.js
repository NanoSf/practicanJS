//! Exponiendo la problematica de usar funciones

function Cliente(nombre,apellido, saldo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
}

const einer = new Cliente('Einer','Aponte', 2500);

function formatearCliente({nombre, apellido, saldo}){
    return `El Cliente ${nombre} ${apellido} tiene un saldo de ${saldo}`;
}

function formatearEmpresa({nombre, saldo, categoria}){
    return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(einer));

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const ccj = new Empresa('Probando Empresa',5000, 'Aprendizaje');
console.log(formatearEmpresa(ccj));