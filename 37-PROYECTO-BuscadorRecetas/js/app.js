function iniciarApp() {
    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {});
    const favoritosDiv = document.querySelector('.favoritos');

    if (selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategorias);
        obtenerCategorias();
    }

    if (favoritosDiv) {
        obtenerFavoritos();
    }
    //! Funciones
    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
            .catch(error => console.log(error));
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(({strCategory}) => {
            const option = document.createElement('option');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategorias(e) {
        const categorias = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorias}`;

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarResetas(resultado.meals))
        .catch(error => console.log(error));
    }

    function mostrarResetas(resetas = []) {
        //* Limpiar codigo HTML
        limpiarHTML(resultado);

        const heading = document.createElement('h2');
        heading.classList.add('text-center','text-black','my-5');
        heading.textContent = resetas.length ? 'Resultados' : 'No Hay Resultados';
        resultado.appendChild(heading);

        //* Iterando sobre resetas
        resetas.forEach(({idMeal, strMeal, strMealThumb, ...receta}) => {
            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body');

            const recetaCardHeading = document.createElement('h3');
            recetaCardHeading.classList.add('card-title','mb-3');
            recetaCardHeading.textContent = strMeal;

            const recetaCardButton = document.createElement('button');
            recetaCardButton.classList.add('btn','btn-danger', 'w-100');
            recetaCardButton.textContent = 'Ver Receta';
            //* Asi se abre el modal con los atributos de boostrap
            // recetaCardButton.dataset.bsTarget = '#modal';
            // recetaCardButton.dataset.bsToggle = 'modal';
            recetaCardButton.onclick = function(){
                seleccionarReceta(idMeal ?? receta.id);
            }

            //* Inyectar el codigo HTML
            recetaCardBody.appendChild(recetaCardHeading);
            recetaCardBody.appendChild(recetaCardButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            //* Inyectando HTML al DOM
            resultado.appendChild(recetaContenedor);
        });
    }

    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarRecetaModal(resultado.meals[0]))
        .catch(error => console.log(error));
    }

    function mostrarRecetaModal(receta) {
        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;

        //* Seleccionamos elementos del modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group');

        //* Mostar cantidads e ingredientes
        for (let i = 1; i <= 20; i++) {
           if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('li');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
           }
            
        }

        modalBody.appendChild(listGroup);

        //* Boton de cerrar y añadir a favoritos
        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        //? Botones cerrar y favoritos
        const btnFavorito = document.createElement('button');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favoritos';
        btnFavorito.onclick = () => {
            if (existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favoritos';
                mostrarToast('Eliminado correctamente');
                return;
            }

            agregarFavorito({
                id: idMeal,
                title: strMeal,
                img: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado correctamente');
        };

        const btnCerrar = document.createElement('button');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function(){
            modal.hide();
        };

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);
        //* Muestra modal
        modal.show();
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        return favoritos.some(favorito => favorito.id === id);
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toas = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toas.show();
    }

    function obtenerFavoritos(params) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if (favoritos.length) {
            mostrarResetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('p');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add('fs-4','text-center', 'font-bold', 'mt-5');
        resultado.appendChild(noFavoritos);
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);