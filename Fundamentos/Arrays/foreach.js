const aprovados = ['Elisama','Elba','Cesar','Bolsonaro']

const produtos = ['RTX 2070','I7 8600k','Placa mãe MSI','Gabinete Corsair 760T']

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1 }) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = ex => console.log(aprovados) // recebe funcao que imprime array

aprovados.forEach(exibirAprovados)// passa variavel que contem a funcao que imprime

produtos.forEach(p => {
    console.log(produtos)
})

const arrowFuncao = () => { console.log('Sou uma arrow function')}
arrowFuncao()

const arrowFuncao2 = (parametro) => { console.log(parametro)}
arrowFuncao2('Cesar')