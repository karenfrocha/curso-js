function calcularAnuidade(mes) {
    let montante = 0
    const taxajuros = 0.05
    
    switch(mes) {
        case 'Janeiro':
            return montante = (1 * taxajuros) * 1
        case 'Fevereiro':
            return montante = (1 * taxajuros) * 2
        case 'Março':
            return montante = (1 * taxajuros) * 3
        case 'Abril':
            return montante = (1 * taxajuros) * 4
        case 'Maio':
            return montante = (1 * taxajuros) * 5
        case 'Junho':
            return montante = (1 * taxajuros) * 6
        case 'Julho':
            return montante = (1 * taxajuros) * 7
        case 'Agosto':
            return montante = (1 * taxajuros) * 8
        case 'Setembro':
            return montante = (1 * taxajuros) * 9
        case 'Outubro':
            return montante = (1 * taxajuros) * 10
        case 'Novembro':
            return montante = (1 * taxajuros) * 11
        case 'Dezembro':
            return montante = (1 * taxajuros) * 12
    }
}

console.log(calcularAnuidade('Março'))