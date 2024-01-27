const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    //* Validando Formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais');

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligarorios');
    }

    //* Consultar API
    consultarAPI(ciudad,pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
    
        container.appendChild(alerta);

        // Se elimina la alerta despues de un tiempo
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultarAPI(ciudad, pais) {
    const appID = 'bfd75025e730a579cdb5dc1af1ef7115';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    spinner();

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            //* Limpiar HTML previo
            limpiarHTML();

            if (datos.cod == "404") {
                mostrarError('Ciudad no encontrada');
            }

            //* Imprime el HTML
            mostrarClima(datos);
        })
        .catch(error => console.log(error));
}

function mostrarClima({name, main : {temp, temp_max, temp_min}}) {
    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.innerHTML = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451`;
    actual.classList.add('font-bold','text-6xl');

    const tempMax = document.createElement('p');
    tempMax.classList.add('text-xl');
    tempMax.innerHTML = `Max: ${max} &#8451`;

    const tempMin = document.createElement('p');
    tempMin.classList.add('text-xl');
    tempMin.innerHTML = `Min: ${min} &#8451`;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCiudad)
                .appendChild(actual)
                .appendChild(tempMax)
                .appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="dot1"></div>
        <div class="dot2"></div>
    `;

    resultado.appendChild(spinner);
}

//! HELPER
const kelvinACentigrados =(grados) => parseInt(grados - 273.15);