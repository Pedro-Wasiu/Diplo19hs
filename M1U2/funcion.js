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