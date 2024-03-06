// function com parametros anonimos 
const soma = (x, y) => x + y

const imprimirResultado = (a, b, operacao = soma) => 
console.log(operacao(a, b))
imprimirResultado(3, 4)
imprimirResultado(3, 4, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x,y) => {
    return x * y
})

// Dentro de um objeto

const pessoa = {
    falar: () => {
        console.log("olá")
    }
}
pessoa.falar()