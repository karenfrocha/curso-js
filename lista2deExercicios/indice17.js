function somarNumeros(array) {
    const resultado = array.reduce(function(acumulador, atual) {
        return acumulador + atual
    })
    console.log(resultado)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])
