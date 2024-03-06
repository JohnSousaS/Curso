let dobro = function(a) {
    return 2 * a
}

dobro = a => {
    return 2 * a
}

dobro = a => 2 * a  // Arrow function é mais resumida. 

console.log("o dobro de PI é "+dobro(Math.PI))

// Arrow function sem parametro
let ola = () => 'olá'
console.log(ola())