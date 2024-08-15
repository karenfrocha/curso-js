// Indice 9
function repetir(objeto, quantRepeticao) {
    resposta = []
    for (let i = 0 ; i < quantRepeticao; i++) {
        resposta.push(objeto)
        // resposta = [...resposta, objeto]
    }

    console.log(resposta)
}

repetir(7, 3)
repetir('código', 3)
