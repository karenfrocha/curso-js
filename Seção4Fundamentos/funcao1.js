//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // o outro numero é undefined, então retorna NaN
imprimirSoma(2, 10, 4, 8, 5) // ele pega soemnte o a e b, o resto ignora
imprimirSoma() //retorna Nan

//função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
