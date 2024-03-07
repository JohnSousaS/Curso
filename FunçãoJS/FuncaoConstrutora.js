// função construtora é como se fosse uma classe, ou seja, como se fosse um molde 
// para criar varios novos objetos ja com atributos pré criados

function carro (velocidadeMaxima = 200, delta = 5) {// aqui ja criamos que o carro tem esses dois parametros
    let velocidadeAtual = 0

    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => velocidadeAtual
} 

// criando objetos usando os parametros acima
const uno = new carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())