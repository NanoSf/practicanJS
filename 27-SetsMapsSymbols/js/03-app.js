//! Map, es similar al set pero almacena llave y valor
const cliente = new Map();

//? Agregando un elemento
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
// cliente.set(true, true);

console.log(cliente);

//? Conocer el tamaño
console.log(cliente.size);

//? Buscar un elemento
console.log('Buscar un elemento: ', cliente.has('nombre'));

//? Obtener un valor, se obtiene por medio de la llave
console.log('Obtener un valor: ', cliente.get('nombre'));

//? Eliminar un elemento
console.log('Eliminar un elemento: ', cliente.delete('saldo'));

//? Limipiar map
cliente.clear();
console.log(cliente);

//? Inicializar map con valor
const paciente = new Map([ ['nombre','paciente'] , ['cuarto','no definido']]);

//? Añadir nuevo elemento
paciente.set('dr','Dr Asignado');

//? Actualizar un elemento
paciente.set('nombre','Antonio');

console.log(paciente);

//? Recorrer el Map
//TODO: Datos seria el valor e index seria la llave
paciente.forEach( (datos, index) => {
    console.log('Index: ',index + ' || Valor: ',datos);
});