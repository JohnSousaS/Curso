let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//como mudar um valor para falso ou verdadeiro
isAtivo = 1 
console.log(!!isAtivo)// com !! ele vai retornar para verdadeiro e com ! ele retorna para falo


console.log('Os verdadeiros')//fazendo os elementos se comportarem como verdadeiros
console.log(!!3)
console.log(!! -1)
console.log(!!' ')//string com espaço em braco retorna verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!'')//string vazia é falso
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar')
console.log(!!('' || null || 0 || ' ' )) //aqui ele retorna com true, porque procurou o unico valor verdadeiro dentro da linha