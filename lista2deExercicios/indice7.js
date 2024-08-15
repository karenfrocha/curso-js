function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo) {
        console.log(minimo <= numero && numero <= maximo)
        return
    }

    console.log(minimo < numero && numero < maximo)
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)
