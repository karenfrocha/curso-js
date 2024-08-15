const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //converter para JSON
})

app.get('./produtos/:id/:nome', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('./produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar JSON
})

app.put('./produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        ide: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar JSON
})

app.delete('./produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // vai gerar JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
