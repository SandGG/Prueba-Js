var elementoDiv = document.getElementsByTagName('div');
var i = 1, time = 1000, conta = 1;

cuadrosCiclo();

function cuadrosCiclo() {
    for (var j = 1; j < elementoDiv.length; j++) {
        setTimeout(cambiarColor,(time*conta));
        conta++;
        setTimeout(volverColor,(time*conta));
    }
    i = 1;
    setTimeout(cuadrosCiclo,(time*conta));;
}

function cambiarColor() {
    console.log(i);
    elementoDiv[i].style.cssText = 'background-color: coral;';
}

function volverColor(){   
    elementoDiv[i].style.cssText = 'background-color: white;';
    i++;
}


