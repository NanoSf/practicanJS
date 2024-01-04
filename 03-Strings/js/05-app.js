const producto = 'Monitor 20 Pulgadas';

// .replace para remplazar
console.log(producto);
console.log('replace->',producto.replace('Pulgadas','"'));
console.log('replace->',producto.replace('Monitor','Monitor curvo'));

// .slice para cortar
console.log('slice(0,10)->',producto.slice(0,10));
console.log('slice(8)->',producto.slice(8));
console.log('slice(2,1)->',producto.slice(2,1));
console.log('slice(-8)->',producto.slice(-8));

// Alternativa a .slice (.substring)
console.log('substring(0,10)->',producto.substring(0,10));
console.log('substring(2,1)->',producto.substring(2,1));


const usuario = 'Einer';
console.log('substring(0,1)->',usuario.substring(0,1));
console.log('charAt(0)->',usuario.charAt(0));