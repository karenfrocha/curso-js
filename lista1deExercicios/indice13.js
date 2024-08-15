function diaUtil(dia) {
    const resto = dia == 1 ? 0 : dia == 7 ? 0 : dia % 7

    switch (resto) {
        case 0: case 1:
            console.log('Dia não útil')
            break
        default: 
            console.log('Dia útil')
    }
}

diaUtil(1) // Domingo
diaUtil(7) // Sabado
diaUtil(3) // Terça
diaUtil(8) // Domingo 2 sem
diaUtil(9) // Segunda 2 sem