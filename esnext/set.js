//não aceita repetição e não é indexado
const times = new Set()
times.add('vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamento')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)