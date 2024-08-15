function simboloMais(quantidade) {
    let resposta = ""

    for (let i = 0; i < quantidade; i++) {
        resposta = resposta.concat("+")
    }

    console.log(resposta)
}

simboloMais(2)
simboloMais(6)
