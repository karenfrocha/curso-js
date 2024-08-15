// Indice 6
function inverso(parametro) {
    switch(typeof parametro) {
        case "boolean":
            console.log(!parametro)
            break
        case "number":
            console.log(-parametro)
            break
        default:
            console.log(`inválido, pois é do tipo: ${typeof parametro}`)
    }
}

inverso(true)
inverso(5)
inverso(-5)
inverso("5")
inverso("casa")
