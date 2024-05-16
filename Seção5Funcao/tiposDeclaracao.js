console.log(soma(5, 6)) 
// o interpretador do js carrega function declaration antes de executar o códico,
//por isso é possivel usar antes dela mesmo aparecer no código

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(56, 41))

//named function epression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(28, 59))
