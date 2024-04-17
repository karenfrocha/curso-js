class Pessoa {
    nome: String
    idade: number

    constructor(nome: String, idade: number){
        this.nome = nome;
        this.idade = idade;
    }


    falar(){
        console.log(`${this.nome} falou!!`)
    }

    verIdade(){
        console.log(`${this.nome} tem ${this.idade} anos`)
    }
}


class Homem extends Pessoa{
    constructor(nome: String, idade: number ,altura: number){
        super(nome, idade)
        this.altura = altura
    }
    
    altura: number

    verAltura(){
        console.log(`${this.nome} tem ${this.altura} metros`)
    }
}

const karen = new Pessoa("Karen", 25)
const gustavo = new Homem("Gustavo", 26, 1.73)

karen.falar()
karen.verIdade()


gustavo.falar()
gustavo.verIdade()
gustavo.verAltura()
