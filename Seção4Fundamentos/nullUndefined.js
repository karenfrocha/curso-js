let valor // não inicializada
console.log(valor)      //aqui a variável foi declarada porém não inicializada
//console.log(valor2) nesse caso a variável valor2 não foi declarada e nem inicializada

valor = null //ausência de valor, ela foi inicializada porém não aponta nenhum local de memória ou objeto
console.log(valor)
//console.log(valor.toString())     // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined       //evite usar undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)