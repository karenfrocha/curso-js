function soma(x, y) {
    return x + y
}

console.log(soma(0.1, 0.2))

function imprimir(valor) {
    // Number força o JS a saber que o valor se trata de um número, assim auxiliando nos métodos disponíveis
    console.log(`R$${Number(valor).toFixed(2).replace(".", ",")}`)
}

imprimir(soma(0.1, 0.2))

// Resposta do professor
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)