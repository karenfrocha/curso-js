//com promise
import { get } from "http";

type Aluno = {
  id: number;
  nome: string;
  imagem: string;
};

const getTurma3 = (letra: string): Promise<Aluno[]> => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise<Aluno[]>((resolve, reject) => {
    get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado) as Aluno[]);
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

Promise.all([getTurma3("A"), getTurma3("B"), getTurma3("C")])
  .then((turmas) => {
    const resultado: Aluno[] = [];

    turmas.map((turma) => resultado.push(...turma));

    return resultado;
  })
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.log(e.message));

getTurma3("D").catch((e) => console.error(e.message));
