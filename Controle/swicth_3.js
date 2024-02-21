const vendedor = function(venderCarro) {
    switch(venderCarro) {
        case 'Carro Up':
        console.log('Compra efetuada com sucesso')
        break
    case 'Moto':
    case 'Sedan':
        console.log('Tem certeza que não prefere este modelo?')
        break
    case 'Amarok':
        console.log('Nós não trabalhamos com esse modelo')
    }
}

vendedor('Moto')
vendedor('Sedan')
vendedor('Carro Up')