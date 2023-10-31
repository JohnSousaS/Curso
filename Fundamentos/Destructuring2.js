//usando array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// a seguir, exemplo complicado que nunca sera usado em hipotese alguma, mas tenta entender essa bagaça
// array dentro de array e ignorando alguns deles. isso não faz sentido

const [,  [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)