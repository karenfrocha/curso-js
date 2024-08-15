function jurosSimples(investimento) {
    return investimento.valor + (investimento.valor * investimento.tempo * investimento.juros)
}

const investimento1 = {
    valor: 100,
    tempo: 2,
    juros: 0.02
}

console.log(jurosSimples(investimento1))

function jurosComposto(capital, taxajuros, tempodecorrido) {
    return montante = capital * (1 + taxajuros) * tempodecorrido
}

console.log(jurosComposto(100, 0.02, 2))
