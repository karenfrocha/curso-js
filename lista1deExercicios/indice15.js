function comprarCarro(carro) {
    switch (carro) {
        case 'hatch':
            console.log("Compra efetuada com sucesso!")
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com esse modelo.')
    }
}

comprarCarro('sedan')
comprarCarro('hatch')
comprarCarro('ferari')
