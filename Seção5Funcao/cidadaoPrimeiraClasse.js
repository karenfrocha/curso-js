//função em JS é Firt-Class Object (Citizens)
// Higher-ordem function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar funçao como parametro
function run(fun) {
    fun()
}

run(function () {console.log('Executando....') })
