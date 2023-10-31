function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

const obj = [] // entre 0 e 100
console.log(rand(obj))

const obj2 = [992] // entre 992 e 100
console.log(rand(obj2))

const obj3 = [, 10] // entre 0 e 10
console.log(rand(obj3))

const obj4 = [50, 40] // entre 50 e 40 
console.log(rand(obj4))