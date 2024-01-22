//! WeakSet -> >Solo funciona con objetos
//! Los weakSet no son iterables
const weakSet = new WeakSet();

const cliente = {
    nombre: 'Einer Aponte',
    saldo: 1500
}

//? Agregar un elemento
weakSet.add(cliente);

//? Buscar un elemento, retorna true o false deoendiendo si encuentra o no el elemento
console.log('Buscar un elemento: ',weakSet.has(cliente));

//? Eliminar un elemento, retorna true o false si lo puede eliminar o no
console.log('Eliminar un elemento: ', weakSet.delete(cliente));

console.log(weakSet);