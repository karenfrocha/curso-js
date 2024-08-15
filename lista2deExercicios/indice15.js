function selecionarPares(array) {
    let resposta = []

    for (let i = 0 ; i < array.length; i++) {
        if((array[i] % 2 == 0 || array[i] == 0) && (i % 2 == 0 || i == 0)) {
            resposta.push(array[i])
        }

    }
    console.log(resposta)
}

selecionarPares([1,2,3,4])
selecionarPares([2,3,4, 6, 8, 10])
