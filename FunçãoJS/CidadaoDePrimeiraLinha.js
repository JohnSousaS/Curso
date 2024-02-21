// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Função literal
function fun1() {}

// Função armzenada em variavel
const fun2 = function() {}

// Função armzenada em array
const array = [function (a, b){ return a + b}, fun1, fun2] 
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Função como parametro
function run(fun) {
    fun()
}

run(function(){console.log('Executando...')})

//uma função pode retornar uma função com um terceiro paramentro
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
}
}

soma(2, 3)(4)

