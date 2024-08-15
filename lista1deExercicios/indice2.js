//exercicio numero 2
function qualTrianguloÉ(a, b, c) { 
    if (a == b || a == c || b == c) {
        return console.log('Esse triângulo é Isósceles')
    } else if (a == b == c) {
        return console.log('Esse triângulo é Equilátero')
    } else if (a != b && b != c && a != c) {
        return console.log('Esse triângulo é escaleno')
    }
}

qualTrianguloÉ(20, 20, 20)
qualTrianguloÉ(20, 48, 10)
qualTrianguloÉ(20, 32, 25)
qualTrianguloÉ(20, 32, 32)
