console.log(Math.ceil(6.1)) // ceil arredonda para cima

const objeto1 = {}
objeto1.nome = 'Bola'
// ou com array // objeto1['nome'] = 'Bola'
console.log(objeto1.nome)

function objeto (nome) { 
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}
const objeto2 = new objeto('Cadeira')
const objeto3 = new objeto('Mesa')
console.log(objeto2.nome)
console.log(objeto3.nome)
objeto2.exec()