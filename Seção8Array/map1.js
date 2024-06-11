// Map: serve para mapear o array e transformar os dados
const nums = [1, 2, 3, 4, 5]

// um For com propósito, pois o for só percorre e te dá o elementos
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)