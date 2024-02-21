// o for in me dá a posição dos atributos e dos valores dos indices em um array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome:  'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64 
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//Utilizando a lista do exercício anterior, 
//crie um algoritmo que mostre de maneira decrescente os elementos desta lista.
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterando sobre os elementos da lista de trás para frente
for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
}