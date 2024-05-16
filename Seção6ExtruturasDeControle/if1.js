function soBoaNoticia(Nota) {
    if(Nota >= 7) {
        console.log('Aprovado!')
    }
}

soBoaNoticia(8.9)
soBoaNoticia(6.2)

//o javascript vai entender que o valor tem que ser algo true
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('') //string porém não contém nada dentro, se tiver espaço já é considerado valor válido ex: ' '
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ') //exemplo de string preenchida
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
