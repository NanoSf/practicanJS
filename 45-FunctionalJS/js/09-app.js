//! Currying dividir los parametros de una funcion en funciones llamadas partials
const suma = (a,b,c) => a+b+c;

const parcial = a => (b,c) => suma(a,b,c);
const primerNumero = parcial(5);
const resultado = primerNumero(4,3);
console.log('parcial: ',resultado);

const parcialDos = a => b => c => suma(a,b,c);
const parcialDosResultado = parcialDos(5)(5)(4);

console.log('parcialDos: ',parcialDosResultado);