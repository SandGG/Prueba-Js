document.addEventListener('keydown', (e) => {
    const elemento = document.querySelector('.container');
    const posicion = elemento.getBoundingClientRect();
    //console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);

    let posx = document.querySelector('#cuadro').offsetLeft; 
    let posy = document.querySelector('#cuadro').offsetTop; 
    let body = document.querySelector('body').offsetWidth * 0.8 - 16; //Para quitar el margen, 80% corresponde al container y 16 de los bordes y margen
    
    console.log(posx, posy);

    if (e.key == 'ArrowUp') {
        let arriba = document.querySelector('#cuadro').style.top = posy - 20; 
        if (arriba > 0) {
            document.querySelector('.container').innerHTML += '<div class="container__cuadro" style="left: '+posx+'px; top: '+posy+'px;"></div>';
            document.querySelector('#cuadro').style.top = arriba+'px';
        }  
    } 

    if (e.key == 'ArrowRight') {
        let derecha = document.querySelector('#cuadro').style.left = posx + 20;
        if (derecha < body) {
            document.querySelector('.container').innerHTML += '<div class="container__cuadro" style="left: '+posx+'px; top: '+posy+'px;"></div>';
            document.querySelector('#cuadro').style.left = derecha+'px'; 
        }
    } 

    if (e.key == 'ArrowDown') {
        let abajo = document.querySelector('#cuadro').style.top = posy + 20; 
        if (abajo < (posicion.bottom - 16)) { //8 de margin en top y 8 por los bordes 
            document.querySelector('.container').innerHTML += '<div class="container__cuadro" style="left: '+posx+'px; top: '+posy+'px;"></div>';
            document.querySelector('#cuadro').style.top = abajo+'px';
        }
    } 

    if (e.key == 'ArrowLeft') {
        let izq = document.querySelector('#cuadro').style.left = posx - 20; 
        if (izq > 0) {
            document.querySelector('.container').innerHTML += '<div class="container__cuadro" style="left: '+posx+'px; top: '+posy+'px;"></div>';
            document.querySelector('#cuadro').style.left = izq+'px';
        }
    } 
});