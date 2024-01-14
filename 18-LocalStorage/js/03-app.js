localStorage.removeItem('nombre');

//! Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));

//! Eliminar todo de localStorage
localStorage.clear();