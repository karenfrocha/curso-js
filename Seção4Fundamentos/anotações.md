- `switch` é usado para valores previsiveis, "exatos"

- `arguments` é utilizado como um parametro invisivel de uma função que contém um arrays com elementos que vao desempenhar um papel:

```js
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
```

- `prototype.` pode transformar uma palavra num método que pode ser usado posteriormente. Exemplo:

``` js
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}
```

- no `ts` quando for exportar algo se usa o `export` e depois `import 'nome' from './algo'`.

- dentro do arquivo package.json existe uma parte `scripts` que são comandos previamente definidos, ou comandos naturais do node (ex: start, restart, stop) que vão disparar o projeto. Se não é comando natural usar `npm run 'algum comando'` no terminal. Para entrar nas pastas certas `cd 'nome da pasta'`.