function fatorial(numero) {
    if (numero <= 0) {
        console.log('Número inválido')
        return
    }

    let resultadoFinal = numero

    for (let i = numero - 1; i >= 1; i--) {
        resultadoFinal = resultadoFinal * i
    }

    console.log(resultadoFinal)
}

fatorial(3)
fatorial(10)
fatorial(0)
fatorial(-15)
fatorial(21)
fatorial(52)
