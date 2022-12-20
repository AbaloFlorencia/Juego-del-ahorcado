let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";

    elegirPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
}