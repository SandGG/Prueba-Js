var alu = document.querySelector('#button_alu');
var mat = document.querySelector('#button_mat');
var calif = document.querySelector('#button_calif');
var objAlu, objMat, objCalif;

alu.addEventListener("click",function(){openTab("alumnos")});
mat.addEventListener("click",function(){openTab("materia")});
calif.addEventListener("click",function(){openTab("calif")});

function openTab(cad) {
    var i;
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cad).style.display = "block";
}

//Alumno
var agregarAlu = document.querySelector('#agregarAlu');
agregarAlu.addEventListener("click",capturarAlu);
var listadoAlu = [];

function capturarAlu() {
    function Alumno(nombre, numeroA, semestre){
        this.nombre = nombre;
        this.numeroA = numeroA;
        this.semestre = semestre;
    }
    aluNom = document.querySelector("#aluNombre").value;
    aluNum = document.querySelector('#aluNumControl').value;
    aluSem = document.querySelector('#aluSem').value;

    if (aluNom != '' && aluNum != '' && aluSem != '') {
        objAlu = new Alumno (aluNom, aluNum, aluSem);

        guardarAlu(); 
    } else {
       console.log('campo vacio'); 
    }   
}

function guardarAlu() {
    listadoAlu.push(objAlu);
    console.log(listadoAlu);

    document.querySelector('#aluTabla').innerHTML += '<tr class="table__tr"><td class="table__td">'+aluNom+'</td><td class="table__td">'+aluNum+'</td><td class="table__td">'+aluSem+'</td></tr>';

    clean();
}

//Materia
var agregarMat = document.querySelector('#agregarMat');
agregarMat.addEventListener("click",capturarMat);
var listadoMat = [];

function capturarMat() {
    function Materia(nombre, claveM){
        this.nombre = nombre;
        this.claveM = claveM;
    }
    matNom = document.querySelector("#matNombre").value;
    matClave = document.querySelector('#matClave').value;

    if (matNom != '' && matClave != '') {
        objMat = new Materia (matNom, matClave);

        guardarMat(); 
    } else {
       console.log('campo vacio'); 
    }   
}

function guardarMat() {
    listadoMat.push(objMat);
    console.log(listadoMat);

    document.querySelector('#matTabla').innerHTML += '<tr class="table__tr"><td class="table__td">'+matNom+'</td><td class="table__td">'+matClave+'</td></tr>';

    clean();
}

//Calif
var agregarCalif = document.querySelector('#agregarCalif');
agregarCalif.addEventListener("click",capturarCalif);
var listadoCalif = [];

function capturarCalif() {
    function Calif(numero, clave, cal1, cal2, cal3){
        this.numero = numero;
        this.clave = clave;
        this.cal1 = cal1;
        this.cal2 = cal2;
        this.cal3 = cal3;
    }
    califNum = document.querySelector("#califNum").value;
    califClave = document.querySelector('#califClave').value;
    calif1 = document.querySelector('#cal1').value;
    calif2 = document.querySelector('#cal2').value;
    calif3 = document.querySelector('#cal3').value;

    if (califNum != '' && califClave != '') {
        objCalif = new Calif (califNum, califClave, calif1, calif2, calif3);
        buscarDatos();
    } else {
       console.log('campo vacio'); 
    }   
}

function buscarDatos(){
    var numAlu, claMat;
    for (var a = 0; a < listadoAlu.length; a++) {
        for (var m = 0; m < listadoMat.length; m++) {
            numAlu = listadoAlu[a].numeroA;
            claMat = listadoMat[m].claveM;
            if (numAlu == califNum && claMat == califClave) {
                console.log('existe');
                guardarCalif()
            } else {
                console.log('numero o clave no existe');
            }
        } 
    } 
}

function guardarCalif() {
    listadoCalif.push(objMat);
    console.log(listadoCalif);

    document.querySelector('#califTabla').innerHTML += '<tr class="table__tr"><td class="table__td">'+califNum+'</td><td class="table__td">'+califClave+'</td><td class="table__td">'+calif1+'</td><td class="table__td">'+calif2+'</td><td class="table__td">'+calif3+'</td></tr>';

    clean();
}


function clean() {
    aluNom = document.querySelector("#aluNombre");
    aluNom.value = "";
    aluNum = document.querySelector('#aluNumControl');
    aluNum.value = "";
    aluSem = document.querySelector('#aluSem');
    aluSem.value = "";

    matNom = document.querySelector("#matNombre");
    matNom.value = "";
    matClave = document.querySelector('#matClave');
    matClave.value = "";

    califNum = document.querySelector("#califNum");
    califNum.value = "";
    califClave = document.querySelector('#califClave');
    califClave.value = "";
    calif1 = document.querySelector('#cal1');
    calif1.value = "";
    calif2 = document.querySelector('#cal2');
    calif2.value = "";
    calif3 = document.querySelector('#cal3');
    calif3.value = "";
}