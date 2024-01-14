// const diaHoy = new Date();
// const diaHoy = new Date('7-31-1999');
const diaHoy = new Date();
let valor;

//? Existe tanto get como set
valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

console.log(diaHoy);

//! Formas de crear fechas
let fecha = new Date().toLocaleString();
console.log(fecha);

fecha = new Date().toLocaleTimeString();
console.log(fecha);

fecha = new Date().toLocaleDateString();
console.log(fecha);