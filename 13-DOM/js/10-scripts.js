//? Creando elemento con JS
const enlace = document.createElement('a');

//Agregando el texto
enlace.textContent = 'Nuevo Enlace';

//Añadiento href;
enlace.href = '/nuevo-enlace';

//Añadiendo otros atributos
enlace.target = "_blanck";
enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;
console.log(enlace);

//Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// navegacion.appendChild(enlace);                                   //* Coloca al final
navegacion.insertBefore(enlace, navegacion.children[1]);            //* Coloca antes de la posicion especificada

function miFuncion(){
    alert('Diste click');
}

//? Crear un card de forma dinamica
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//? Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//? Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'texto alternativo';

//? Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//? Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);