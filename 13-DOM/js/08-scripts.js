const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); //* Los saltos de linea son considerados elementos 
// console.log(navegacion.children); //* Los saltos de linea son considerados elementos 


// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

//? Traversing del hijo al padre
// console.log(card.parentNode);                                     //* Los saltos de linea son considerados elementos 
// console.log(card.parentElement);                                 //* Los saltos de linea son considerados elementos 
// console.log(card.parentElement.parentElement.parentElement);    //* Puedes colocar los que necesites

//? Seleccionar hermanos
// console.log(card);
// console.log(card.nextElementSibling);                           //* Avanza al siguiente hermano
// console.log(card.nextElementSibling.nextElementSibling);       //* Se puede colocar las veces que se requiera

//? Ultimo card
// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);                          //* Avanza al siguiente hermano
// console.log(ultimoCard.previousElementSibling.previousElementSibling);  //* Se puede colocar las veces que se requiera