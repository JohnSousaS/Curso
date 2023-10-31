// armazendo uma função dentro de uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma (2, 3)

// armazenando uma função arrow em uma variavel
// => substitui a palavra function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito, mais reduzida ainda

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// função de um unico parametro

const imprimir2 = a => console.log(a)
imprimir2("Legal")