//um operador de desestruturação, extrai de dentro de um objeto seus atributos
//quando trabalha com objeto se usa a {}, quando no ambito do arreio se usa []
// {} chaves criam objetos, [] colchetes criam arreios, () criam funções.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // um objeto que nao existe no bloco
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//não retirar dados que não existem ou caminhos que não estao livres