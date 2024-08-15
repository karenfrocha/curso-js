//sem promise
import { get } from "http";

type Aluno = {
  id: number;
  nome: string;
  imagem: string;
};

const getTurma = (letra: string, callback: (alunos: Aluno[]) => void) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  get(url, (res) => {
    let resultado = "";

    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes: string[] = [];

getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});

// ==================== USANDO ASYNC/AWAIT + FETCH ========================= //

const getTurma2 = async (
  letra: string,
  callback: (alunos: Aluno[]) => void
) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  try {
    const response = (await (await fetch(url)).json()) as Aluno[];

    callback(response);
  } catch (error) {
    console.error(error);
  }
};

let nomes2: string[] = [];

getTurma2("A", (alunos) => {
  nomes2 = nomes2.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma2("B", (alunos) => {
    nomes2 = nomes2.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma2("C", (alunos) => {
      nomes2 = nomes2.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes2);
    });
  });
});
