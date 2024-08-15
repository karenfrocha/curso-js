function removerPropriedade(objeto, excluir) {
    // const novoObjeto = {... objeto}
    // delete novoObjeto[excluir]
    // return novoObjeto

    const {[excluir]: _ , ...resto} = objeto
    return resto
}

const objeto = {a: 1, b: 2}

const novoObjeto = removerPropriedade(objeto, "a")

console.log(novoObjeto)
console.log(objeto)

console.log(Object.is(removerPropriedade(objeto, "a"), objeto))
