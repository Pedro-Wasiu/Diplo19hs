let pantalla = document.getElementById('pantalla')

function agregarNumero(numero) {
    pantalla.value += numero
}

function reset(c) {
    pantalla.value = c
}

function restar() {
    let valorActual = pantalla.value
    pantalla.value = valorActual.slice(0, -1)
}


let primerNumero = null
let operacion = null
let segundoNumero = null
let resultado = null

function sumar() {
    primerNumero = Number(pantalla.value);
    operacion = "+"
    pantalla.value = ""
}

function restar() {
    primerNumero = Number(pantalla.value);
    operacion = "-"
    pantalla.value = ""
}

function calcular() {
    if (operacion === '+') {
        segundoNumero = Number (pantalla.value);
        resultado = primerNumero + segundoNumero;
        pantalla.value = resultado;
    }

    else if (operacion === '-') {
        segundoNumero = Number (pantalla.value);
        resultado = primerNumero - segundoNumero;
        pantalla.value = resultado;
    }

}