//pessoa -> 123 -> {...}
//a constante aponta para um endereço de memória (123), que tem uma informação

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> mudou para outro enderço 456 -> {...}
// pessoa = { nome: 'Ana }

Object.freeze(pessoa) // não deixa mexer em nada no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)
