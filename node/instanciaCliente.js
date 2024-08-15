const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')
const contadorD = require('./instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)
// como é um objeto, quando alterou no contadorA ele pode ser visualizado no contadorB, pois mudou ele

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
