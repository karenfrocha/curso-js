function calculadora(x, operacao, y) {
    switch (operacao) {
        case '+':
            console.log(x + y)
            break
        case '-':
            console.log(x - y)
            break
        case '*':
            console.log(x * y)
            break
        case '/':
            console.log(x / y)
            break
        default:
            console.log('Operação inválida!')
    }
}

calculadora(3, '+', 2)
calculadora(3, '-', 2)
calculadora(3, '*', 2)
calculadora(3, '/', 2)

for(let i = 0; i < 10; i++){
    console.log("Parabéns")
}
