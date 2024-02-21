// Crie um laço while que irá iterar enquanto n for menor ou igual a 5. Mostre no console os valores obtidos.

let n = 0
while (n <= 5) {
    console.log(`n = ${n}`)
    n++
}

//Crie um vetor chamado carros. Este vetor irá conter os valores “Gol”, “Uno”, “S10”, “Kadett”.
//Você também precisa criar uma variável que será o índice para percorrer este laço de repetição. 
//No seu laço de repetição while, utilize o console.log para mostrar todos os nomes dos carros que estão contidos no seu vetor.

let carros = ['Gol, Uno, S10, Kadett']
let i = 0
while (i < carros.length) {
    console.log(`carro = ${carros[i]}`)
    i++
}