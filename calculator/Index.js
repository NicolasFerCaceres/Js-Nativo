const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
let firtsHanddler = {};
let secondHanddler = {};

function updateContent(newText) {
    var newSpan = document.createElement('span');
    newSpan.textContent = newText;
    pantalla.scrollLeft = pantalla.scrollWidth; // Scroll to the right
  }


botones.forEach(boton => {
    boton.addEventListener('click', () => {     
        const botonApretado = boton.textContent;
        secondHanddler = firtsHanddler;
        firtsHanddler = botonApretado;
        console.log(firtsHanddler + ' | ' + secondHanddler)
        


        if(boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if(boton.id === 'borrar') {
            if(pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
                pantalla.textContent = '0';
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                return;
            }
        }
        
        if(boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent = 'Error!';
            }
            return
        }

        if(pantalla.textContent === '0' || 
            pantalla.textContent === 'Error!' || 
            secondHanddler === '=' && boton.classList.contains('number')) {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

        updateContent()
    })
})