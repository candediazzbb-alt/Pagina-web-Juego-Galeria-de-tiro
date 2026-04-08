//declaracion de variables, capturamos los elementos por su id
const objetivo = document.getElementById('objetivo');
const pantalla = document.getElementById('pantalla');
const textopuntos = document.getElementById('puntos');
const textovidas = document.getElementById('vidas');

//IDENTIDAD (desafío extra)
let nombre = prompt("Ingrese su nombre:");
if (!nombre) {
    nombre = "Jugador";
}

//contadores
let puntos = 0;
let vidas = 3; 

textopuntos.innerText = puntos;
textovidas.innerText = vidas;

//definicion de la funcion de movimiento
function mover() {
    const tamaño = objetivo.offsetWidth;

    const x = Math.floor(Math.random() * (pantalla.offsetWidth - tamaño));
    const y = Math.floor(Math.random() * (pantalla.offsetHeight - tamaño));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}

//bucle de tiempo
let intervalo = setInterval(mover, 1000);

//contador de puntos
objetivo.addEventListener('click', function (e) {
    //IMPORTANTE: usar el evento correctamente
    e.stopPropagation();

    puntos = puntos + 1;
    textopuntos.innerText = puntos;

    //DIFICULTAD PROGRESIVA (desafío extra)
    if (puntos === 10) {
        objetivo.style.width = "50px";
        objetivo.style.height = "50px";
    }

    mover();
});

//contador de vidas
pantalla.addEventListener('click', function () {

    vidas = vidas - 1;
    textovidas.innerText = vidas;

    //FEEDBACK VISUAL (desafío extra)
    pantalla.style.backgroundColor = "red";
    setTimeout(() => {
        pantalla.style.backgroundColor = "";
    }, 200);

    //condicional de cierre
    if (vidas <= 0) {
        clearInterval(intervalo); //detiene el movimiento

        setTimeout(() => {
            alert("Game Over " + nombre + " 🎮\nPuntaje final: " + puntos);
            location.reload(); //reinicia el juego
        }, 200);
    }
});