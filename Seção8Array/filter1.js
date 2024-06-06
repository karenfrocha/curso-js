const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

/*const Caro = function(p) {
    return p.preco > 500
}*/
const Caro = p => p.preco > 500
const Fragil = p => p.fragil == true

resultado = produtos.filter(Caro).filter(Fragil)
console.log(resultado)

