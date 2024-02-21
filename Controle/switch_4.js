var fruta = function(fruta) {
    switch(fruta) {
        case "banana":
          console.log("Não vendemos esta fruta aqui")
          break
        case "kiwi":
          console.log("Estamos com escassez de kiwis")
          break
        case "melancia":
          console.log("Aqui está, são 3 reais o quilo")
          break
    
        default:
          console.log("Compre isto no açougue")
    }

}


fruta("banana");
fruta("kiwi");
fruta("melancia");
fruta("linguiça");