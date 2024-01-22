//! Set -> Arreglo sin datos repetidos
const carrito = new Set();

//? Agregar valores
carrito.add('Carrito');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
console.log(carrito);

//? Eliminar un elemento devuelve true o false
console.log(carrito.delete('Disco #3'));

//? Preguntar si tiene un elemento devuelve true o false
console.log(carrito.has('Carrito'));

//? Obtener cantidad de elementos
console.log(carrito.size);

//? Limpiar el set
// carrito.clear();

console.log(carrito);

//? Se puede iterar un set
//TODO: el index o el producto son lo mismo ya que set no alancena llave, solo valor
//TODO: La ultima vatiables, es el el set con todos los datos
carrito.forEach( (producto, index, pertenece) => {
    console.log('Index: ',index + ' || Producto: ', producto);
    console.log(pertenece);
});


//? Ejemplo practico de un foreach
const numeros = [10,20,30,40,50,10,20];
console.log(numeros);

const noDuplicados = new Set(numeros);
console.log(noDuplicados);