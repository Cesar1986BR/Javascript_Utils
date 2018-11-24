function criarProduto(nome, preco){
  return{
      nome,
      preco,
      desconto: 0.1
  }
}

console.log(criarProduto('RTX2070',3.500))