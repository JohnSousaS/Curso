//Crie um algoritmo usando o for que leia uma lista. 
//Mostre no console apenas os números pares. 
//Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];


const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterando sobre os elementos da lista
for (let i = 0; i < Number.length; i++) {
    // Verificando se o número é par
    if (Number[i] % 2 === 0) {
        // Se for par, exiba-o
        console.log(Number[i]);
    }
}

//Utilizando a lista do exercício anterior, 
//crie um algoritmo que mostre de maneira decrescente os elementos desta lista.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterando sobre os elementos da lista de trás para frente
for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
    if (Number[i] % 2 === 0) {
        // Se for par, exiba-o
        console.log(Number[i]);
    }
}