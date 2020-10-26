document.querySelector('#button--target').addEventListener('click', () => {
    document.querySelector('#modal').style = 'display: flex; align-items: center;';
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('#modal').style.display = 'none';
    });
    document.querySelector('#modal').addEventListener('click', (e) => {
        //console.log(e.target);
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }); 
});

document.querySelector('#button--event').addEventListener('click', () => {
    document.querySelector('#modal').style = 'display: flex; align-items: center;';
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('#modal').style.display = 'none';
    });
    document.querySelector('#modal').addEventListener('click', () => {
        modal.style.display = "none";  
    }); 
    document.querySelector('.modal__container').addEventListener('click', (e) => {
        e.stopPropagation()
    }); 
});

document.querySelector('#button--prueba').addEventListener('click', () => {
    if () {
        document.querySelector('.modal__text').innerHTML = 'Usando target'
    } else {
        document.querySelector('.modal__text').innerHTML = 'Usando stopPropagation'
    }
});