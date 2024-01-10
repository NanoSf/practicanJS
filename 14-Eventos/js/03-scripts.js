const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () =>{
//     console.log('escribiendo');
// });

// busqueda.addEventListener('keyup', () =>{
//     console.log('escribiendo');
// });

// busqueda.addEventListener('blur', () =>{
//     console.log('Saliste del campo de busqueda');
// });

// busqueda.addEventListener('copy', () =>{
//     console.log('Copiaste del campo de busqueda');
// });

// busqueda.addEventListener('paste', () =>{
//     console.log('Pegaste al campo de busqueda');
// });

// busqueda.addEventListener('cut', () =>{
//     console.log('Cortaste del campo de busqueda');
// });

// busqueda.addEventListener('input', () =>{
//     console.log('Ejecutaste cualquier evento anterior excepto blur');
// });

//? Valores al pasar el evento
// busqueda.addEventListener('input', (e) =>{
//     console.log(e.type);
// });

// busqueda.addEventListener('input', (e) =>{
//     console.log(e.target);
// });

// busqueda.addEventListener('input', (e) =>{
//     console.log(e.target.value);
// });

//? Se pueden realizar validaciones dentro de los eventListener
busqueda.addEventListener('input', (e) =>{
    if(e.target.value === ''){
        console.log('Fallo la validacion');
    }
    console.log(e.target.value);
});