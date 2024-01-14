localStorage.setItem('nombre', 'Einer');    //? -> Dura incluso si apagas el equipo

// sessionStorage.setItem('nombre', 'Einer');  ? -> Si cierras la pagina y vuelves a abrir se pierde la informacon
const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));