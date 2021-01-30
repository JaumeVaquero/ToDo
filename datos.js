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


//pintar solo los laborales.
function filterContactsByCategory(pCategory, pTareasList) {

    const listaFiltrada = pTareasList.filter(contact => tarea.category == pCategory)

    return listaFiltrada;
}

//quiero sacar por consola todos los contactos masculinos

function filterByGender(pListaContactos, pGender) {

    let listaContactosGender = pListaContactos.filter((contacto) => contacto.gender == pGender)

    return listaContactosGender;
}



//pintar toda la lista de contactos
printContact(contactos);

let selectTypeContact = document.querySelector('#tipo');

selectTypeContact.addEventListener('change', getType);

function getType(event) {
    //todos los elementos de tipo formulario recoge su valor con un propiedad value

    let tipo = event.target.value;
    if (tipo != "") {
        let lista = filterContactsByCategory(tipo, contactos);
        printContact(lista);
    } else {
        printContact(contactos);
    }

}

//quiero un filtro selector por genero masculino , y femenino.

let selectGender = document.querySelector('#gender');
selectGender.addEventListener('change', getGender);

function getGender(event) {
    let gender = event.target.value;
    if (gender != "") {
        let lista = filterByGender(contactos, gender);
        printContact(lista);
    } else {
        printContact(contactos);
    }
}

//quiero la busqueda por palabra
let inputNombre = document.querySelector('#nombre');
let btnBusqueda = document.querySelector('#btn');

btnBusqueda.addEventListener('click', getInputData);
inputNombre.addEventListener('keydown', getInputData); //enter

function getInputData(event) {
    if (event.keyCode == 13 || event.type == 'click') {
        let palabraBuscar = inputNombre.value;
        let listaPersonas = searchByWord(palabraBuscar, contactos);
        printContact(listaPersonas);
    }
}

function searchByWord(pWord, pContactList) {
    const filterList = pContactList.filter(contact => {
        return contact.name.toLowerCase().includes(pWord.toLowerCase());
    })
    return filterList
}