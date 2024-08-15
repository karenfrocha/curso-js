// Não mantem o array original integro até o final da função
function receberPrimeiroEUltimoElemento(array = []) {
    const resultado = []
    resultado.push(array.shift())
    resultado.push(array.pop())
    console.log(resultado)
}

receberPrimeiroEUltimoElemento([7, 14, 'Olá'])
receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16])

// Mantém o array original integro até o final da função
function receberPrimeiroEUltimoElemento2(array = []) {
    const resultado = [array[0], array[array.length - 1]]

    console.log(resultado)

    console.log("Como ficou: ", array)
}

receberPrimeiroEUltimoElemento2([7, 14, 'Olá'])
receberPrimeiroEUltimoElemento2([-100, 'aplicativo', 16])