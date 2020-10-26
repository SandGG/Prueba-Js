document.addEventListener('keydown', logKey);

function logKey(e) {
    const elemento = document.querySelector('.container');
    const posicion = elemento.getBoundingClientRect();
    //console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);

    let posx = document.querySelector('.container__cuadro').offsetLeft; 
    let posy = document.querySelector('.container__cuadro').offsetTop; 
    let body = (document.querySelector('body').offsetWidth - 8) * 0.8 - 6; //Para quitar el margen, 80% corresponde al container y 14 de los bordes y margen
    console.log(body);
    if (e.key == 'ArrowUp') {
        let arriba = document.querySelector('.container__cuadro').style.top = posy - 20; 
        if (arriba > 0) {
            document.querySelector('.container__cuadro').style.top = arriba+'px';
        }  
    } 

    if (e.key == 'ArrowRight') {
        let derecha = document.querySelector('.container__cuadro').style.left = posx + 20;
        console.log(derecha);
        if (derecha < body) {
            document.querySelector('.container__cuadro').style.left = derecha+'px'; 
        }
    } 

    if (e.key == 'ArrowDown') {
        let abajo = document.querySelector('.container__cuadro').style.top = posy + 20; 
        if (abajo < (posicion.bottom - 14)) { //8 de margin en top y 6 por los bordes 
            document.querySelector('.container__cuadro').style.top = abajo+'px';
        }
    } 

    if (e.key == 'ArrowLeft') {
        let izq = document.querySelector('.container__cuadro').style.left = posx - 20; 
        if (izq > 0) {
            document.querySelector('.container__cuadro').style.left = izq+'px';
        }
    } 
}
