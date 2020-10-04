var aciertos = 0, calif = 0, persona, resp;

function show(){
    resp = document.getElementById('resp');
    resp.style.display = 'block';
    alert("entra");
}

function calificar(){
    persona = document.getElementById("nombre").value;

    if(document.getElementById("comi1").checked && document.getElementById("comi2").checked)
        aciertos++;
    if(document.getElementById("numEst").value==32)
        aciertos++;
    if(document.getElementById("sig1").checked)
        aciertos++;
    if(document.getElementById("opc").value=="Todas las anteriores")
        aciertos++;
    if(document.getElementById("agui2").checked)
        aciertos++;

    calif = aciertos * 100 / 5;
    show();

    alert("Estimado "+persona+" tuvo "+aciertos+" de 5 aciertos\nCalificación: "+calif);
}