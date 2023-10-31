 const nome = 'Rebeca'
 const concatenacao = 'Olá ' + nome + '!' //desse jeito a linha ficaria muito grande
//${} variaveis e funções são chamados dentro dela
 const template = `
    Olá
    ${nome}!`//com o template eu posso quebrar a linha da string, além de que ele reconhece os espaços
console.log(concatenacao, template)

//Expressões dentro da template...
console.log(`1 + 1 = ${1 + 1}`)
