function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final.')
}

//teste1(8)
//teste1(4)

function teste2(num) {
    if (num > 7); { // cuidado com o ; nao deve ser usado em extruturas de controle.
        console.log(num)
    }
}

teste2(9)
teste2(4)
