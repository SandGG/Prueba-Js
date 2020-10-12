var elementoDiv = document.getElementsByTagName('div');
var i = 1;

cuadrosCiclo();

function cuadrosCiclo() {
    setInterval(cambiarColor,(1000));
    setInterval(volverColor,(2000));
}

function cambiarColor() {
    console.log(i);
    if(i == elementoDiv.length) {
        i = 1;
    }
    elementoDiv[i].style.cssText = 'background-color: coral;';
}

function volverColor(){   
    elementoDiv[i].style.cssText = 'background-color: white;';
    i++;
}


