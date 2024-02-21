let contador = 1
while(contador  <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// com o laço for
for (let i=1; i<=10;i++){
    console.log(`i = ${i}`)
}

// percorrer os indices dos arrays com o for


const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length ; i++) {
    console.log(`nota = ${notas[i]}`)
}
console.log('Fim')