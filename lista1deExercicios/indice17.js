function pagamento(salarioBase, plano) {
    switch (plano) {
        case 'A':
            console.log(salarioBase + (salarioBase * 0.10))
            break
        case 'B':
            console.log(salarioBase + (salarioBase * 0.15))
            break
        case 'C':
            console.log(salarioBase + (salarioBase * 0.15))
            break
        default:
            console.log('Plano inválido!')
    }
}

pagamento(1500, 'A')
