//! Usando moment (libreria para manejar fechas) momentjs.com
const diaHoy = new Date();

moment.locale('es');

//* Le pudes pasar el formato que quieras
console.log(moment().format('MMMM Do YYYY h:mm:ss'));
console.log(moment().format('LLLL', diaHoy));
console.log(moment().add(3, 'days').calendar());