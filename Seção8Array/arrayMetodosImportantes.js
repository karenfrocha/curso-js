const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo item do arreio
console.log(pilotos)

pilotos.push('Verstappen') // adiciona esse item no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')  // Adiciona elemento no primeiro item
console.log(pilotos)

//splice pode adicionar e remover elementos ao mesmo tempo

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa saiu, exclui o indice que vc passou e se exclui mais algum (3 "indice 3", 1 "excluir só um")
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // cria novo array com indice 1 até o 3
console.log(algunsPilotos2)
