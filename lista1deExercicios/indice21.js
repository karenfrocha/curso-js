function planoDeSaúde(idade) {
    const plano = 100
    switch(idade) {
        case idade >= 60:
            return `R$ ${plano * 130} reais`
        case idade <= 9:
            return `R$ ${plano * 80} reais`
        case 10>= idade <= 30:
            return `R$ ${plano * 50} reais`
        case 31>= idade <= 59:
            return `R$ ${plano * 85} reais`
    }
}

console.log(planoDeSaúde(87))
console.log(planoDeSaúde(7))
console.log(planoDeSaúde(15))
console.log(planoDeSaúde(45))

// Resposta do professor
function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));