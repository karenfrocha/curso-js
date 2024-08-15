function filtrarNumeros(arguments) {
    let resultado = []
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'number') {
            resultado.push(arguments[i])
        }

    }
    console.log(resultado)
}

filtrarNumeros(['java', 1, '2', 5, 'web', 10])
