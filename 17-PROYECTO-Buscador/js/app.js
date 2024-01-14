//! VARIABLES
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');
const puertas = document.querySelector('#puertas');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const resutlado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max-10;

// Generar objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//! EVENTOS
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); //* -> Muestra los autos al cargar
    llenarSelect(); //* -> Llena las opciones de años
});

//TODO Event Listener para los filtros
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});


//! FUNCIONES
function mostrarAutos(autos){
    //Limpiar resultados
    limpiarHTML();

    autos.forEach(({marca, modelos, year, puertas, transmision, precio, color}) => {
        const autoHTML = document.createElement('p');

        autoHTML.innerHTML = `
            ${marca} ${modelos} - ${year} - Puertas: ${puertas}  - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resutlado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limpiarHTML(){
    while(resutlado.firstChild){
        resutlado.removeChild(resutlado.firstChild);
    }
}

// Generar los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        // Agregamos al filtro de años
        year.appendChild(opcion);
    }
}

// Funcion para fitlrar en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca)
                            .filter(filtrarYear)
                            .filter(filtrarMinimo)
                            .filter(filtrarMaximo)
                            .filter(filtrarPuertas)
                            .filter(filtrarTransmision)
                            .filter(filtrarColor);
    console.log(resultado);
    if(resultado.length > 0){
        mostrarAutos(resultado);
        return;
    }
    
    noResultados();
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;

    if(color){
        return auto.color === color;
    }
    return auto;
}

function noResultados(){
    limpiarHTML();

    const noResultados = document.createElement('div');
    noResultados.classList.add('alerta','error');
    noResultados.textContent = 'No Hay Resultados, intenta con otros términos de búsqueda';

    resutlado.appendChild(noResultados);
}