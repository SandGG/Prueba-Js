//console.log("Entra");

window.onload = function (){
    var titulo = document.querySelector('#button_Title');
    titulo.addEventListener("click",changeTitle);
    var primero = document.querySelector('#button_First');
    primero.addEventListener("click",changeFirst);
    var segundo = document.querySelector('#button_Second');
    segundo.addEventListener("click",changeSecond);
    var estilo = document.querySelector('#button_Style');
    estilo.addEventListener("click",changeAddStyle);
}

function changeTitle(){
    titulo = document.querySelector('#conteiner__title');
    titulo.innerHTML = "Nuevo Titulo del Texto";
}

function changeFirst(){
    primero = document.querySelector('#conteiner__first');
    primero.innerHTML = "1. Nuevo Texto del primer parrafo";
}

function changeSecond(){
    segundo = document.querySelector('#conteiner__second');
    segundo.innerHTML = "2. Nuevo Texto del segundo parrafo";
}

function changeAddStyle(){
    estilo = document.getElementById('conteiner');
    estilo.style.cssText = 'background-color: black; color: white; width: 80%; margin: 0 auto; font-size: 22px;';
    estilo = document.getElementById('button_Title');
    estilo.style.cssText = 'background-color: coral; color: white; font-size: 22px;';
    estilo = document.getElementById('button_First');
    estilo.style.cssText = 'background-color: pink; color: black; font-size: 22px;';
    estilo = document.getElementById('button_Second');
    estilo.style.cssText = 'background-color: white; color: black; font-size: 22px;';
    estilo = document.getElementById('button_Style');
    estilo.style.cssText = 'background-color: purple; color: white; font-size: 22px;';
}