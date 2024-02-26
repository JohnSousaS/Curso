// Estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1 // Se 'a' for undefined ou null, atribua 1 ao valor da variavel
    b = b || 1
    c = c || 1
    return a + b + c
}  

console.log(soma1(), soma1(3), soma1(1,2), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1  in arguments ? b : 1
    c = typeof c == 'number' ? 1 : c // o tipo c é um numero? se for, deixe por padrão 1, se não for, mantenha-o como está
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma1(3), soma2(1,2), soma2(0, 0, 0))

// Valor padrão es2015

function soma3(a = 1, b = 1, c = 1) {
    return  a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2), soma3(0, 0, 0))