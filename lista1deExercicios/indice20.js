const notasDisponiveis = [100, 50, 10, 5, 1]

let troco = 176

function calcularTroco(troco) {
    let trocoRestante = troco 
    let notas = notasDisponiveis

    const troquinho = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        1: 0
    }

    while(trocoRestante > 0) {
        if(trocoRestante >= notas[0]){
            trocoRestante -= notas[0]
            troquinho[notas[0]]++
        } else {
            notas.shift()
        }     
    }

    Object.keys(troquinho).map(key => {
        if (troquinho[key] > 0) console.log(`${troquinho[key]} nota(s) de R$ ${key}.`)
    })
}

calcularTroco(troco)