console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')   // Forma que não é literal
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']    // Forma literal de criar arreios
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')      // método que adiciona elementos
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) // percorre e ve o tamanho do arreio
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()    // .sort função que organiza o arreio
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //primeira parte o indice, depois o que vc quer deletar (indice 1, apagar o indice 1), também adiciona
console.log(aprovados)
