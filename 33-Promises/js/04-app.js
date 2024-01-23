const paises = [];

const nuevoPaise = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
});

nuevoPaise('Alemania')
    .then(res => {
        console.log(res);
        console.log(paises);
        return nuevoPaise('Francia');
    })
    .then(res => {
        console.log(res);
        console.log(paises);
        return nuevoPaise('Inglaterra');
    })
    .then(res => {
        console.log(res);
        console.log(paises);
    });