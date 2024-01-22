//! Symbols
const sym = Symbol('1');
const sym2 = Symbol('1');

//* Los symbol nunca seran iguales asi contengan el mismo valor
// if(sym === sym2){
//     console.log('Son Iguales');
// }else{
//     console.log('Son Diferentes');
// }

// console.log(Symbol() === Symbol());

//* Uso de symbols como propiedades
const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//* Agregar Symbol como propiedad
persona[nombre] = 'Einer';
persona[apellido] = 'Aponte';

//* Agregamos atributos normales
persona.tipoCliente = 'Premium';
persona.saldo = 50000;

console.log(persona);

//* Para acceder a una variable symbol obligatoriamente se usa esta sintacsis
console.log(persona[nombre]);

//* Las propiedades que usa un symbol no son iterables
console.log('Iterando el objeto Personas');
for (let i in persona) {
    console.log(i);
}

//* Definir la descripcion de un Symbol
const nombreCLiente = Symbol('Nombre Cliente');
const cliente = {};

cliente[nombreCLiente] = 'Pepito';

console.log(cliente[nombreCLiente]);
console.log(nombreCLiente);
