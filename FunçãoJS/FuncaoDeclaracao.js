console.log("O valor da soma é: "+soma(2, 3)) // aqui eu posso chamar a função antes
// function declaration
function soma(x, y) {
    return x + y
}
// function expression, o mesmo que função anonima
const sub = (x, y) => x - y
console.log("O valor da subtração é: "+sub(4, 1))
    


// named function expression
const mult = function mult(x, y)  {
    return x * y
}
console.log("O valor da multiplicação é: "+mult(5, 6))