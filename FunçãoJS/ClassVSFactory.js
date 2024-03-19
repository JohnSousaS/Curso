class pessoa {
    constructor(nome) {
        this.nome = nome 
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa ('João')
p1.falar()
// Factory

function criarPessoa(nome) {
    return {
        falar: function() {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = criarPessoa('Maria')
p2.falar()