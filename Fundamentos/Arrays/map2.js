const carrinho = [  // array de objetos JSON
    '{"nome": "Borracha","preco":3.45}',
    '{"nome": "Caderno","preco":13.90}',
    '{"nome": "Kit de Lapis","preco":41.22}',
    '{"nome": "Caneta","preco":7.50}'
]


// Mostrar somente o preco

 const paraObjeto =  json => JSON.parse(json)
const apenasPreco = produto => produto.preco
 let mostraPreco =  carrinho.map(paraObjeto).map(apenasPreco)


console.log(mostraPreco)