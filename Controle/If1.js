function SoBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com sucesso ' + nota)
        // se a nota for maior ou igual a 7, ele mostra no console que foi aprovado
    }
}

SoBoaNoticia(6.1)
SoBoaNoticia(8.0)

function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
        // só retorna valores verdadeiros
    }
}

SeForVerdadeEuFalo() // sem valor = undefined
SeForVerdadeEuFalo(null) // sem valor = nulo
SeForVerdadeEuFalo(undefined) // sem valor = undefined
SeForVerdadeEuFalo(' ')
SeForVerdadeEuFalo('')
SeForVerdadeEuFalo([1,2])
SeForVerdadeEuFalo([])