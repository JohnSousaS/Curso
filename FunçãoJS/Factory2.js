function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.5
    }
}
console.log(criarProduto('ipad', 2655))
console.log(criarProduto('mouse', 149))