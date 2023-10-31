// novo recurso ES2015
// tirando um ou mais atributos de um objeto
// exemplo:

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // mandando tirar o nome e a idade do objeto pessoa
console.log(nome, idade)

// mudando o nome de um parametro de entrada
const { nome: n, idade : i } = pessoa 
console.log(n, i)

// tirando atributos inexistentes
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // sobrenome volta como undefined, mas o bemHumorada retorna como true porque associamos no destructuring 

// tirando atributos de um objeto criado dentro do objeto
const { endereco: logradouro, numero, cep} = pessoa 
console.log(logradouro, numero, cep) // como o cep não foi um tributo associado ao endereço, ele retorna como undefined