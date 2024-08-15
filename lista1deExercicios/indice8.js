
function resultados(jogos) {
    let recordes = 0
    let piorJogo = 0
    let melhorResultado = 0
    let piorResultado = 0 
    
    for (let i = 0; i < jogos.length; i++) {
        if (i == 0) {
            melhorResultado = jogos[i]
            piorResultado = jogos[i]
            
            continue
        }
        
        if (jogos[i] > melhorResultado) {
            melhorResultado = jogos[i]
            recordes++
        }
        
        if(jogos[i] < piorResultado) {
            piorResultado = jogos[i]
            piorJogo = i + 1
        }
    }
    
    console.log([recordes, piorJogo])
}

const jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

resultados(jogos)