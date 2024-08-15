import { get } from "http";

type Aluno = {
  id: number;
  nome: string;
  imagem: string;
};

const getTurma3 = <T>(letra: string): Promise<T> => {
  const url: string = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise<T>((resolve, reject) => {
    get(url, (res) => {
      let resultado: string = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado) as T);
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// recurso do ES8
// Objetivo de simplificar o uso de promises
const obterAlunos = async () => {
  const tA = await getTurma3<Aluno[]>("A");
  const tB = await getTurma3<Aluno[]>("B");
  const tC = await getTurma3<Aluno[]>("C");

  const resultado: Aluno[] = [];

  return resultado.concat(tA, tB, tC);
}; // retorna um objeto AsyncFunction

obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.error(e));

// EXEMPLO DE USO DE GENERICS
function generica<Param1, Param2, RT>(param1: Param1, param2: Param2): RT {
  return {
    param1,
    param2,
  } as RT;
}

console.log(
  generica<string, number, { [key: string]: string | number }>("a", 2)
);

// EXEMPLO DE OMISSAO DE TIPO
type Usuario = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

const usuarioApenasComNome: Omit<
  Omit<Omit<Usuario, "id">, "email">,
  "idade"
> = {
  nome: "wsihwisuw",
};

const usuarioComPropriedadesOpcionais: Partial<Usuario> = {}
