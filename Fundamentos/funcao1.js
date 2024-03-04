//função sem retorno:
//o que vai dentro da função são as variaveis que chamamos de parametros de entrada, que no caso é o (a, b)

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// mostra NaN porque não há valores associados por padrão as variaveis


//função com retorno
function soma(a, b = 0) //b = 0 significa que b por padrão sera 0 se não tiver nenhum outro valor atribuído
{
    return a + b
}

console.log(soma(2,3))
console.log(soma(2)) //aqui ele retorna só o 2, porque o b ja tem um numero associado a ele. retornaria 3 se o b fosse 1 por padrão
