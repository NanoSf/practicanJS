//! PROMISE
/**
 * TODO: Hay tres valores posibles
 * TODO: fulfilled - El Promise se cumplió
 * TODO: rejected - El Promise no se cumplió
 * TODO: pending - No se ha cumplido y tampoco se rechazo
 */
const aplicarDescuento = new Promise((resolve, reject)=>{
    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado');
    }else {
        reject('No se pudo aplicar');
    }
});

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error));

function descuento(mensaje){
    console.log(mensaje);
}