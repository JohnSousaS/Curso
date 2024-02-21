const fruta = function (comprar) {
  switch (comprar) {
    case "maca":
      console.log("Não vendemos esta fruta aqui")
      break
    case "kiwi":
      console.log("Estamos com escassez de kiwis")
      break
    case "banana":
      console.log("Aqui está, são 3 reais o quilo")
      break

    default:
      console.log("Compre isto no açougue")
  }
}

fruta("maca");
fruta("kiwi");
fruta("banana");
fruta("linguiça");
