function sistemaLanchonete(codigo, quantidade) {
    let valor = 0
    switch(codigo) {
        case 100:
            return `R$ ${valor = 3.00 * quantidade}`
        case 200:
            return `R$ ${valor = 4.00 * quantidade}`
        case 300:
            return `R$ ${valor = 5.50 * quantidade}`
        case 400:
            return `R$ ${valor = 7.50 * quantidade}`
        case 500:
            return `R$ ${valor = 3.50 * quantidade}`
        case 600:
            return `R$ ${valor = 2.80 * quantidade}`
        default:
            return `Produto inexistente!`
    }
}

console.log(sistemaLanchonete(100, 2))
console.log(sistemaLanchonete(600, 2))
console.log(sistemaLanchonete(560, 3))