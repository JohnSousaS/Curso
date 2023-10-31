//um array [] serve para acrescentar mais elementos a uma variavel, mas um array se torna um objeto
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//acessar os indices dentro dos arrays
console.log(valores[4])//mesmo que não exista o indice 4, ele não dara erro, apenas ira retornar undefined

valores [4] = 10 //acrestando o indice 4 no array
console.log(valores)

valores [10] = 10 //ele vai pular os valores inexistentes
console.log(valores)

console.log(valores.length)//quantidades de elementos no array

valores.push({id: 3}, false, null, 'teste')//add novos elementos no array
console.log(valores)

console.log(valores.pop())//tira o ultimo elemento do array
//ou
delete valores[0] //deleta o indice 0
console.log (valores)

