
const sequence ={
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto){
     if(!produto.id) 
        produto.id = sequence.id

      produto[produto.id] = produto
      return produto 
}

function getProduto(id){
   return produto[id] || {}
}


function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produto[id]
    delete produto[id]
    return produto
}

//Exportnado pra ficar visivel externamente
module.exports={
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}