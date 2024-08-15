// Indice 1
function cumprimento(nome) {
    console.log(`Olá, ${nome}!`)
}
cumprimento('Ana')

// Indice 2
function converterIdadeEmAnosParaDias(idade) {
    console.log(idade * 365)
}
converterIdadeEmAnosParaDias(25)

// Indice 3
function calcularSalario(horasTrabalhadas, valorHora) {
    console.log(`Salário igual a R$ ${horasTrabalhadas * valorHora}`)
}
calcularSalario(150, 40.5)

// Indice 4
function nomeDoMes(numero) {
    switch(numero) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Número inválido!')
    }
}
nomeDoMes(1)
nomeDoMes(4)

// Indice 5 
function maiorOuIgual(x, y) {
    if(
        x >= y 
        && typeof x == "number" 
        && typeof y == "number"
    ) {
        console.log(true)
        return
    } 
    console.log(false)
}

maiorOuIgual(0, '0')
maiorOuIgual(0, 0)
maiorOuIgual(5, 8)
maiorOuIgual(5, 1)