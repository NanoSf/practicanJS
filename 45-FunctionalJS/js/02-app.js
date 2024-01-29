const suma = (a,b) => a+b;
const multiplicar = (a,b) => a*b;

//! Crear una funcion que recibe otra funcion como argumento
const sumarOMultiuplicar = fn => fn(10,20);

console.log(sumarOMultiuplicar(suma));
console.log(sumarOMultiuplicar(multiplicar));
