const notas =[7, 6, 5, 8, 3, 7.1, 9]

//sem callback
let notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
let notasBaixas2 = notas.filter((nota) => nota < 7)
    
console.log(notasBaixas2)