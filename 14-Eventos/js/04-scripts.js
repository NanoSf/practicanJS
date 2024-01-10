const formulario = document.querySelector('#formulario');

//? utilizando una funcion al vuelo
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault(); //* Previene la accion por defecto

//     console.log('Consultar una api...');
//     console.log(e.target.action);
// });


//? Crear metodo y pasarlo como parametro
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //* Previene la accion por defecto

    console.log('Consultar una api...');
    console.log(e.target.action);
}