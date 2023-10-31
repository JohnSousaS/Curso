// com função
// utilizando o destructuring dentro da função, ja atribuimos valores padrões a eles
function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
const obj2 = { min: 40}
console.log(rand(obj2))