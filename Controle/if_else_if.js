Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
} 

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10))
    console.log('Quadro de Honra')
else if(nota.entre(7, 8.99))
console.log('APROVADO')
else if(nota.entre(4, 6.99))
console.log('RECUPERAÇÃO')
else if(nota.entre(0, 3.99))
console.log('REPROVADO')

else
console.log('Nota invalida')

console.log('FIM')
}


imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.5)
imprimirResultado(3)
imprimirResultado(-1)