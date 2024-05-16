let contador = 1                //variavel que controla o laço
while(contador <= 10) {             // expressao que diz se continua ou nao
    console.log(`contador = ${contador}`)
    contador++                              //incremento
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {         //.length ele navega o array até o fim da seu comprimento
    console.log(`nota = ${notas[i]}`)
}