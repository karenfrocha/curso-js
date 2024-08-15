console.log(this === global)
// falso, this aponta para module.exports

console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função') // dentro de uma função this não apornta para module.exports
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // verdadeiro dentro de uma função
}

logThis()