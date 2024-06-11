//formas de percorrer um arreio sem muito propósito
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {      //precisa colocar o segundo parametro da função, senão ele não mostra o indice
    console.log(`${indice + 1} ${nome}`)        // tem dentro da função os parametros (nome, indice, array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
