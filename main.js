var ban = false;

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none';
    document.querySelector('.modal__text').innerHTML = 'Texto del modal';
});

document.querySelector('#button--target').addEventListener('click', () => {
    ban = true;
    document.querySelector('#modal').style.display = 'flex';
    modalTarget();
});

function modalTarget () {
    document.querySelector('#modal').addEventListener('click', (e) => {
        if (e.target.id == 'modal') {
            modal.style.display = "none";
        }
    }); 
}

document.querySelector('#button--event').addEventListener('click', () => {
    ban = false;
    document.querySelector('#modal').style = 'display: flex; align-items: center;';
    modalEvent();
});

function modalEvent () {
    document.querySelector('#modal').addEventListener('click', () => {
        modal.style.display = "none";  
    }); 
    document.querySelector('.modal__container').addEventListener('click', (e) => {
        e.stopPropagation()
    }); 
}

document.querySelector('#button--prueba').addEventListener('click', () => {
    if (ban) {
        document.querySelector('.modal__text').innerHTML = 'Usando target';
    } else {
        document.querySelector('.modal__text').innerHTML = 'Usando stopPropagation';
    }
});