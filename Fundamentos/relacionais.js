// operadores relacionais serve para saber se os valores e se os tipos são iguais, ele sempre retorna com true ou false
console.log('01)', '1' == 1) // se o valor é igual 
console.log('02)', '1' === 1) // se o tipo é igual
console.log('03)', '3' != 3) // se o valor é diferente
console.log('04)', '3' !== 3 ) // se o tipo é diferente

// menor ou maior ou igual
// == é pra saber se o valor ou o tipo é igual, mas === é pra saber se os dois são iguais
console.log('05)', 3 < 2 ) // se é menor
console.log('06)', 3 > 2 ) // se é maior
console.log('07)', 3 <= 2)// menor ou igual
console.log('08)', 3 >= 2)// maior ou igual

const data1 = new Date(0) // data de referencia marco 0 
const data2 = new Date(0)
console.log('09)', data1 === data2)
console.log('10)', data1 == data2)
console.log('11)', data1.getTime() === data2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
