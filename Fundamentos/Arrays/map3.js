Array.prototype.map2 = function(callback){ //implementando como funcionamento do map
   const newArray = []
   for (let i = 0; i < this.length; i++) {
       newArray.push(callback(this[i],i,this)); //this[i] -> valor do indice
                                                // i -> indice do array
                                                //this -> Array atual                            
   }
   return newArray
}

const carrinho = [  // array de objetos JSON
    '{"nome": "Borracha","preco":3.45}',
    '{"nome": "Caderno","preco":13.90}',
    '{"nome": "Kit de Lapis","preco":41.22}',
    '{"nome": "Caneta","preco":7.50}'
]


// Mostrar somente o preco

const paraObjeto =  json => JSON.parse(json)
const apenasPreco = produto => produto.preco
let mostraPreco =  carrinho.map2(paraObjeto).map2(apenasPreco)


console.log(mostraPreco)