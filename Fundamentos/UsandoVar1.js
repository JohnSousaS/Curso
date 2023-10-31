{
  {
    {
      {
        var sera = "sera?"; // ela ainda pode ser acessada fora do bloco porque não ha uma function associada
      }
    }
  }
}

console.log(sera)

// var fora do bloco da function não pode ser acessada

function teste() {
    var local = 123
}
teste()
console.log(local)