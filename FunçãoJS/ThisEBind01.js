// O this em JavaScript é uma palavra-chave especial que se refere ao objeto atualmente em foco, 
// geralmente dentro de um método de um objeto. 
// Pense nele como uma maneira de se referir ao objeto que está executando o código no momento.

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)//Ele aponta para a propriedade saudacao  
    }

}
pessoa.falar()

// conflito   
const falar = pessoa.falar
falar()

//com o Bind.
// O método bind() em JavaScript é usado para criar uma nova função que, quando chamada, tem seu valor this definido para um valor específico, 
// independentemente de como a função é chamada.
// Em outras palavras, você pode "vincular" um objeto específico ao contexto de this de uma função.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()