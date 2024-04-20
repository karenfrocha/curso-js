/* tabela verdade:
v e v = v
v e f = f
f e ? = f

op1 e op2 e op3 e op4 = só será verdadeiro se um deles for verdadeiro

v ou ? = v
f ou v = v
f ou f = f

xor ou exclusivo verdadeiro/falso
v xor v = f
v xor f = v
f xor v = v
f xor f = f
nesse os operando tem que serem diferentes senão dá falso 

!v = f
!f = v
negação lógica !  */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || símbolo do tipo Ou
    const comprarTv50 = trabalho1 && trabalho2 // tipo && os precisa ser os dois verdadeiros pra fazer
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
