let min = 1,
    max = 10,
    numeroGanador = Math.floor(Math.random() * (max - min + 1) + min),
    intentos = 3;

const juego = document.querySelector("#juego"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    adivinaBtn = document.querySelector("#adivina-btn"),
    adivinaInput = document.querySelector("#adivina-input"),
    mensaje = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

juego.addEventListener('mousedown', nuevoJuego);
adivinaBtn.addEventListener('click', verificarNumero);

function nuevoJuego(e) {
    if (e.target.className === 'button-primary juego-nuevo') {
        window.location.reload();
    }
}

function verificarNumero(e) {
    let num = parseInt(adivinaInput.value);
    if (isNaN(num) || num < min || num > max) {
        setMensaje(`Por favor ingrese un número entre ${min} y ${max}`, 'red');
    } else if (numeroGanador === num) {
        gameOver('green', `Adivinaste!!! You Win!!`);
    } else if (--intentos > 0) {
        adivinaInput.value = '';
        setMensaje(`Número incorrecto te quedan ${intentos} intentos`, 'red')

    } else {
        gameOver('red', `Te quedan ${intentos} intentos el número era ${numeroGanador}`)

    }

}

function setMensaje(texto, color) {
    mensaje.style.color = color;
    mensaje.textContent = texto;
}

function gameOver(color, msg) {
    adivinaInput.disabled = true;
    adivinaInput.style.borderColor = color;
    setMensaje(msg, color);
    adivinaBtn.value = 'Nuevo Juego';
    adivinaBtn.className += ' juego-nuevo';
}