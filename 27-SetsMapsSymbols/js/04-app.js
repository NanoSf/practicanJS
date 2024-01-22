//! WeakMap
//! No se puede iterar ni existe el metodo size
//! Solo funciona con objetos
const producto = {
    inProducto: 10,
}

const weakMap = new WeakMap();

//? Agregar un elemento
weakMap.set(producto, 'Monitor');

//? Buscar un elemento
console.log('Buscar un elemento: ',weakMap.has(producto));

//? Obtener un elemento
console.log('Obtener un elemento: ', weakMap.get(producto));