// hernaça reuso do códico, criar mecanismo para esse reuso,
// nos usos priorizar a composição de objetos ao invés da hernça

const ferrari = {
    modelo: 'F40',
    velMax: 234
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
