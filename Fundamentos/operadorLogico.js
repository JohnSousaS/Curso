function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // (ou) se o trabalho1 ou o trabalho2 for true, ele vai comprar o sorvete
    const comprarTv50 = trabalho1 && trabalho2 // (e) significa que só vai comprar a tv se os dois trabalhos forem true
    const comprarTv32 = trabalho1 != trabalho2 // (ou exclusivo) significa que se algum retornar false, ele vai comprar a de 32
    const manterSaudavel = !comprarSorvete // negação logica

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))