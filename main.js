const tab_add = document.querySelector('#button_add').addEventListener('click', function() {openTab('agregar')});
const tab_edit = document.querySelector('#button_edit').addEventListener("click", function() {openTab('editar')});
const tab_delet = document.querySelector('#button_delete').addEventListener('click', function() {openTab('eliminar')});
const tab_list = document.querySelector('#button_list').addEventListener('click', function() {openTab('list')});

const listAgenda = [];

function Agenda (nombre, apellido, telefono, ocupacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.ocupacion = ocupacion;
}

const button_add = document.querySelector('#add').addEventListener('click', () => {
    let nombre = document.querySelector('#add_nombre').value;
    let apellido = document.querySelector('#add_apellido').value;
    let telefono = document.querySelector('#add_telefono').value;
    let ocupacion = document.querySelector('#add_ocupacion').value;
    let anun = document.querySelector('.anuncio--add');
    if (nombre != '' && apellido != '' && telefono != '' && ocupacion != '') {
        const objAgenda = new Agenda (nombre, apellido, telefono, ocupacion);
        listAgenda.push(objAgenda);
        anun.innerHTML = '';
        clean();
    } else {
        anun.innerHTML = 'Faltan datos';
    }
});

const button_search = document.querySelector('#button_search-edit').addEventListener('click', () => {
    let nombre = document.querySelector('#edit_nombre').value;
    let anun = document.querySelector('.anuncio--edit');
    if (nombre == '') {
        anun.innerHTML = 'Llene el campo nombre';
    } else {
        for (let i = 0; i < listAgenda.length; i++) {
            if (listAgenda[i].nombre == nombre) {
                document.querySelector('#edit_edit').style.display = 'block';
                document.querySelector('#button_search-edit').style.display = 'none';
                document.querySelector('#edit_apellido').value = listAgenda[i].apellido;
                document.querySelector('#edit_telefono').value = listAgenda[i].telefono;
                document.querySelector('#edit_ocupacion').value = listAgenda[i].ocupacion;
                const button_edit = document.querySelector('#edit').addEventListener('click', function() {editar(i)});
                return anun.innerHTML = ''; 
            } else if (i == listAgenda.length-1) {
                anun.innerHTML = 'Nombre no encontrado';
            } 
        }
    } 
});

const button_delete = document.querySelector('#button_search-delete').addEventListener('click', () => {
    let nombre = document.querySelector('#delete_nombre').value;
    let anun = document.querySelector('.anuncio--delete');
    if (nombre == '') {
        anun.innerHTML = 'Llene el campo nombre';
    } else {
        for (let i = 0; i < listAgenda.length; i++) {
            if (listAgenda[i].nombre == nombre) {
                document.querySelector('#delete_nombre').disabled = true;
                document.querySelector('#delete_delete').style.display = 'block';
                document.querySelector('#button_search-delete').style.display = 'none';
                document.querySelector('#delete_apellido').value = listAgenda[i].apellido;
                document.querySelector('#delete_telefono').value = listAgenda[i].telefono;
                document.querySelector('#delete_ocupacion').value = listAgenda[i].ocupacion;
                const button_eliminar = document.querySelector('#delete').addEventListener('click', function() {eliminar(i)});
                return anun.innerHTML = ''; 
            } else if (i == listAgenda.length-1) {
                anun.innerHTML = 'Nombre no encontrado';
            } 
        }
    } 
});

let editar = (i) => {
    let nombre = document.querySelector('#edit_nombre').value;
    let apellido = document.querySelector('#edit_apellido').value;
    let telefono = document.querySelector('#edit_telefono').value;
    let ocupacion = document.querySelector('#edit_ocupacion').value;
    let anun = document.querySelector('.anuncio--edit');
    if (nombre != '' && apellido != '' && telefono != '' && ocupacion != '') {
        listAgenda[i].nombre = nombre;
        listAgenda[i].apellido = apellido;
        listAgenda[i].telefono = telefono;
        listAgenda[i].ocupacion = ocupacion;
        anun.innerHTML = ''; 
        clean();
    } else {
        anun.innerHTML = 'Faltan datos';
    }
}

let eliminar = (i) => {
    document.querySelector('.anuncio--delete').innerHTML = '';
    listAgenda.splice(i, 1);
    clean();
}

let clean = () => {
    let input = document.getElementsByClassName('form__input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    document.querySelector('#edit_edit').style.display = 'none';
    document.querySelector('#button_search-edit').style.display = 'block';
    document.querySelector('#delete_delete').style.display = 'none';
    document.querySelector('#button_search-delete').style.display = 'block';
    document.querySelector('#delete_nombre').disabled = false;

    lista();
}

let openTab = cad => {
    let x = document.getElementsByClassName('tabs');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.querySelector(`#${cad}`).style.display = 'block';
}

let lista = () => {

    document.querySelector('#listAgenda').innerHTML = '<tr><td>Nombre</td><td>Apellido</td><td>Telefono</td><td>Ocupación</td></tr>';

    for (let i = 0; i < listAgenda.length; i++) {
        console.log('entra');
        let nombre = listAgenda[i].nombre;
        let apellido = listAgenda[i].apellido;
        let telefono = listAgenda[i].telefono;
        let ocupacion = listAgenda[i].ocupacion;
        document.querySelector('#listAgenda').innerHTML += `<tr class="table__tr"><td class="table__td">${nombre}</td><td class="table__td">${apellido}</td><td class="table__td">${telefono}</td><td class="table__td">${ocupacion}</td></tr>`;
    }
 
}