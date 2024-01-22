//! Otros tipos de iteradores
const ciudades = ['Londes','New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map([['nombre','Einer'],['profesion','Desarrollador Web']]);


//?Default
console.log('Default');
console.log('Con arreglo');
for(let ciudad of ciudades){
    console.log(ciudad);
}

console.log('Con Set');
for(let orden of ordenes){
    console.log(orden);
}

console.log('Con Map');
for(let dato of datos){
    console.log(dato);
}


//? Keys iterator
console.log('Keys iterator');
console.log('Con arreglo');
for(let keys of ciudades.keys()){
    console.log(keys);
}

console.log('Con Set');
for(let keys of ordenes.keys()){
    console.log(keys);
}

console.log('Con Map');
for(let keys of datos.keys()){
    console.log(keys);
}

//? Values iterator
console.log('Values iterator');
console.log('Con arreglo');
for(let values of ciudades.values()){
    console.log(values);
}

console.log('Con Set');
for(let values of ordenes.values()){
    console.log(values);
}

console.log('Con Map');
for(let values of datos.values()){
    console.log(values);
}


//? Entries iterator
console.log('Entries iterator');
console.log('Con arreglo');
for(let entry of ciudades.entries()){
    console.log(entry);
}

console.log('Con Set');
for(let entry of ordenes.entries()){
    console.log(entry);
}

console.log('Con Map');
for(let entry of datos.entries()){
    console.log(entry);
}