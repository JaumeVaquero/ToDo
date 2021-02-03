let sectionTareas = document.querySelector('#tareas');

const printContact = function (pTareasList) {
    sectionTareas.innerHTML = "";
    for (let tareas of pTareasList) {
        sectionTareas.innerHTML += `<article>
            <h2>${tareas.name}</h2>
            <button type="button" class="btn-close" aria-label="Close" align="right"></button>
        </article>`;
    }
}


//pintar solo los filtrados.
function filterContactsByPriority(pPriority, pTareasList) {

    const listaFiltrada = pTareasList.filter(priority => priority.prioridad == pPriority)

    return listaFiltrada;
}


//pintar toda la lista de contactos
printTareas(tareas);

let selectTypeContact = document.querySelector('#tipo');

selectTypeContact.addEventListener('change', getType);

function getType(event) {
