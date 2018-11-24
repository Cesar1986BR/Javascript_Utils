function getPreco(imposto=0,moeda='R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4589,
    desc:0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco:59950, desc:0.20}

console.log( getPreco.call(carro))
console.log(getPreco.apply( carro))

//diferença entre os 2
console.log(getPreco.call(carro,0.14,'$'))// passa o contexto seguido dos 2 parametros
console.log(getPreco.apply(global,[0.14,"$"]))//passa context seguido de um array com os 2 parametros

//formatação de valor

const valorfromatado =  getPreco.call(carro,0.14,'$')
console.log("Valor formatado:" + valorfromatado)

