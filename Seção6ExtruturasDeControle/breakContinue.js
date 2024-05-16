const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nuns) { // x é o indice do array
    if (x == 5 ) {
        break
    }
    console.log(`${x} = ${nuns[x]}`)        //break faz com que saia do laço
}

console.log('Fim do primeiro exemplo')

for (y in nuns) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nuns[y]}`)        //interrompe a repetição corrente e vai pra próxima repetição
}

console.log('Fim do segundo exemplo')

externo: for (a in nuns) {      //não usar esse tipo de código, estruturas que desviam fluxo são complicadas
    for (b in nuns) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
