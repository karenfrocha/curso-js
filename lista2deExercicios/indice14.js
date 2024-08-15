function objetoParaArray2(objeto) {
    
   /* const resultado = []
    Object.entries(objeto).forEach(([chave, valor]) => {
        resultado.push([chave, valor])
    })
    console.log(resultado)*/

    console.log(Object.entries(objeto))
}

objetoParaArray2({
    nome: 'Maria',
    profissao: 'Desenvolvedora'
})
