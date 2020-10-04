console.log("Entra");

/*Aqui regresa null, dentro de una fuction no
var primero = document.querySelector("#button_First");
alert(primero);*/

var primero = document.querySelector('#button_First'); //aqui regresa null, por eso el evento dice que se realiza
primero.addEventListener("click",changeFisrt);

function changeTitle(){
    var titulo = document.querySelector('#title');
    titulo.innerHTML = "Nuevo Titulo del Texto";

    /*Aqui no regresa null, ------descomentar para probar y comprobar que aqui si entra---------
    var primero = document.querySelector('#button_First');
    primero.addEventListener("click",changeFisrt);*/
}

function changeFisrt(){
    console.log("Entra al Event");
}

function changeSecond(){
    
}

function changeAddStyle(){
    
}

