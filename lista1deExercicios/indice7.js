

function funcaoDeSegundoGrau(ax2, bx, c) {
    // Math.pow retorna um numero elevado a uma potência específica
    const delta = Math.pow(bx, 2) - 4 * (ax2 * c)

    if (delta < 0) {
        console.log("Delta é negativo")
        return
    }

    // Math.sqrt retorna a raiz quadrada de um número
    const x1 = (-bx + Math.sqrt(delta))/2 * ax2
    const x2 = (-bx - Math.sqrt(delta))/2 * ax2

    console.log("x1: ", x1)
    console.log("x2: ", x2)
}

funcaoDeSegundoGrau(3, -5, 12)

funcaoDeSegundoGrau(1, 2, -15)