const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


const obtenerNombres = p => p.nombre;
const mayor400 = producto => producto.precio > 400;

const resultado = carrito.map(obtenerNombres);
const resultadoDos = carrito.filter(mayor400);

console.log(resultado);
console.log(resultadoDos);