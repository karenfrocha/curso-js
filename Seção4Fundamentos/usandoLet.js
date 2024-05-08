let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/*variaveis definidas com a palavra reservada let tem escopo global, escopo de bloco e escopo de função
diferente do var ela não retorna o que está fora do bloco.*/