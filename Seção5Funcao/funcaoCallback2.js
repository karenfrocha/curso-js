const  notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9]

// Sem callback
const notasBaixas1 = []
for (const i in notas) {
	if (notas[i] < 7) {
		notasBaixas1.push(notas[i])
	}
}
console.log(notasBaixas1)

// com Callback
const notasBaixas2 = notas.filter(function (nota) {
	return nota < 7
})
console.log(notasBaixas2)

// Com Callback e arrow function
/* para a arrow function pode-se utilizar
const notasMenoruQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7) */


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)