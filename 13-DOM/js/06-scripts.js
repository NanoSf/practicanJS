const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);      //No encuentra texto que este oculto
console.log(encabezado.textContent);    //Encuentra texto oculto
console.log(encabezado.innerHTML);      //Se trae el html

const encabezadoDos = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezadoDos);

const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'