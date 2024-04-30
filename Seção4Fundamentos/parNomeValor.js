// nome identificador e seu valor
const saudacao = 'Opa' // contexto léxico 1, local onde a sua variavel está definido no código

function exec() {
    const saudacao = 'Oi' //constexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares Nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua sei lá qual',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
