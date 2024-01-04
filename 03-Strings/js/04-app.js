//! OTROS METODOS
const producto = '             Monitor 20 Pulgadas                 ';
console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log('trimStart->',producto.trimStart());
console.log('trimEnd->',producto.trimEnd());

console.log('trimStart.trimEnd->',producto.trimStart().trimEnd());
console.log('trim->',producto.trim());