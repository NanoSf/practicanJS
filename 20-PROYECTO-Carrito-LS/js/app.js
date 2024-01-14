//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando Agregar al Carrito
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Mostrar cursos del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        //* Busca el elemento en localStorage
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        //* Crea el carrito con los datos del localStorage
        carritoHTML();
    });
    // Vaciar carrito de compras
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = [];
        limpiarHTML();
    });
}


//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina cursos del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        console.log(cursoId);
        // Elimina del arreglo por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        console.log(articulosCarrito);
        carritoHTML(); // Iterar sobre el carrito y mostrar su html
    }
}

// Lee el contenido del html al que le dimos click y extrar la informacion del curso
function leerDatosCurso(curso){
    //console.log(curso);

    // Crear un objeto con el contendio del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    //Revisando si el elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;   // Retorna el objeto actualizado
            }else{
                return curso;   // Retorna los objetos no duplicados
            }
        });

        articulosCarrito = [...cursos]
    } else {
        // Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito,infoCurso]
    }
    

    carritoHTML();
}


// Muestra el carrito de compras en el html
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el html
    articulosCarrito.forEach((curso) => {
        const {imagen,titulo,precio,cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar al localStorage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
// Elimina los cursos del tbody
function limpiarHTML(){
    // Formla lenta
    // contenedorCarrito.innerHTML = '';

    // Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}