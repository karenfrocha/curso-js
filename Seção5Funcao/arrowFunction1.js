let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

ola = () => "olá"
ola = _ => 'Olá' // possui um parametro
console.log(ola())
