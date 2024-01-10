const nav = document.querySelector('.navegacion');

/** Registrear un evento
** mousedown -> similar al click
** click
** dblclick -> Doble click
** mouseup -> Cuando sueltas el click
**/
// nav.addEventListener('click', ()=>{
//     console.log('click en nav');
// });

// nav.addEventListener('mouseenter', ()=>{
//     console.log('Entrando al nav');
//     nav.style.backgroundColor = 'white';
// });

// nav.addEventListener('mouseout', ()=>{
//     console.log('Saliendo al nav');
//     nav.style.backgroundColor = 'transparent';
// });
// nav.addEventListener('mousedown', ()=>{
//     console.log('Click al nav');
// });

// nav.addEventListener('mouseup', ()=>{
//     console.log('Soltando click al nav');
// });

nav.addEventListener('dblclick', ()=>{
    console.log('Doble click');
});