//! No se puede acceder a las cosas que existan dentro de un IIFE, a menos de que la variable se asigna al window
//! Se pueden colocar alias a los import con la palabra as seguida del alias
import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

//? Variables
console.log(clienteNombre);
console.log(ahorro);

//? Metodos
console.log(mostrarInformacion(clienteNombre, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente('Einer', 1500000);
console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Einer', 1500000, 'Desarollo web');
console.log(empresa);
console.log(empresa.mostrarInformacion());

nuevaFuncion();