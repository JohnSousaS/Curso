// Par nome/valor
const saudacao = 'opa' // contexto léxico

function exec() {
    const saudacao = 'faaaaala' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 82,
    endereco: {
        logaradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)