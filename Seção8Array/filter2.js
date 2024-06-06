Array.prototype.filter2 = function(calback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(calback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


/*const Caro = function(p) {
    return p.preco > 500
}*/
const Caro = p => p.preco > 500
const Fragil = p => p.fragil == true

resultado = produtos.filter2(Caro).filter2(Fragil)
console.log(resultado)
