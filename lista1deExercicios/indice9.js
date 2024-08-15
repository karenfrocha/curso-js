function notaDoAluno(nota) {
    if (nota < 38) {
        console.log('Nota:', nota, "- Reprovado!")
        return
    }
    
    const resto = nota % 5
    let notaFinal = 0
    
    if (resto < 3) {
        notaFinal = nota
    } else {
        notaFinal = nota + (5 - resto)
    }

    console.log("Nota:", notaFinal, "- Aprovado!")
}

notaDoAluno(83)
notaDoAluno(32)