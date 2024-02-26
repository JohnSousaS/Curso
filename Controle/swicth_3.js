const vendedor = function(VenderCarro) {
    switch(VenderCarro) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso!!!')
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'Conversivel':
            console.log('Nós não trabalhamos com este modelo!')
    }
}
vendedor('Sedan')
vendedor('Motocicleta')
vendedor('Caminhonete')
vendedor('Conversivel')
vendedor('Hatch')