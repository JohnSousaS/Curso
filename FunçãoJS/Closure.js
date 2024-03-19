// Closure é o escopo criado quando a função é declarada
// Esse escopo permite que a função acesse e manipule variaveis criadas a partir dela

// Contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Fora' 
        function dentro() {
            return x
            
        }
        return dentro
    }

    const minhaFuncao = fora()
    console.log(minhaFuncao())
