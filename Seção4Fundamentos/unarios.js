let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // ele executou o ++ primeiro, depois comparou o estritamente igual e depois o -- menos
console.log(num1 === num2)
