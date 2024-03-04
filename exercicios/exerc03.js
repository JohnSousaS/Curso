// Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
// Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' 
// se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

//dificultei o exercicio colocando um dano aleatorio
function personagemMorreu(dano, saude) {
    if (dano >= saude){
        return 1
    }
    else {
        return 0
    }

}
function gerarDanoAleatorio() {
    return Math.floor(Math.random() * 100) + 1

}
    
    

let saude = 50
let dano = gerarDanoAleatorio()


if (personagemMorreu(dano, saude) === 1) {
    console.log("O personagem morreu.")
} else {
    console.log("O personagem sobreviveu.")
}

