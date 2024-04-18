function tratarErroELancar(erro) {
    throw new Error('aguarde recarregar')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUperCase() + '!!!')
    } catch (e) {
        tratarErroELancar (e)
    } //finally {
       // console.log('final')
    // }            esse "finaly" executa um aviso dando erro ou não, a mensagem vai aparecer sempre.
}


const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
