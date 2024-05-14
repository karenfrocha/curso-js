// literalmente "chamar de volta"

const fabricantes = ['Mercedes', 'Audi', 'BMH']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)   //forEach é uma funcionalidade de array
fabricantes.forEach(function(a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante))
