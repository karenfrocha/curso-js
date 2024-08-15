const numero: number = 0 

type Pessoa = {
    nome: string;
    idade: number;
    cor?: string;
}

const objeto: Pessoa = {
  nome: "Karen",
  idade: 25,
  cor: "Branca"
}

class Humano {
  constructor(nome: string, idade: number, cor?: string){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor
  }

  nome: string;
  idade: number;
  cor?: string;

   apresentar() {
    console.log(`Olá, sou ${this.nome}, e tenho ${this.idade} anos.`)
  }
}

const objeto2 = new Humano("Gustavo", 26, "Branca")

objeto2.apresentar()

