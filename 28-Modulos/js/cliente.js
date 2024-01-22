//! USANDO IIFE
// (function(){
//     console.log('Desde un IIFE');

//     const nombreCliente = 'Einer';
// })();

//! USANDO EXPORT
export const nombreCliente = 'Einer';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if (ahorro > 0) {
        console.log('Tiene Ahorro');
    } else {
        console.log('No Tiene Ahorro');
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

//! El export default se puede dejar sin nombre
export default function nuevaFuncion(){
    console.log('Este es el export default');
}