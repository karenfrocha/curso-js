function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))


const array = ["a", "b", "c"]
const objeto = {a: 1, b: 2, c: 3}


const array0Padrao = array[0] // Forma padrão em um array
const [array0Destruc, array1Destruc] = array // Forma com destructuring, const [index0, index1, index3] = array

const objA = objeto.a // Forma padrão em um objeto
const {a} = objeto // Com destructuring, sem renomear a propriedade
const {a: objADestruct} = objeto  // Com destructuring, definindo um nome customizado para a propriedade

console.log(objADestruct)

