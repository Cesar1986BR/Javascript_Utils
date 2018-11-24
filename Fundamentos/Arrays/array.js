let aprovados = new Array('Cesar','Elba','Flora','Chiquinha')

aprovados.push('Douglas')
aprovados[5] = 'Elisama'
aprovados[9] = 'Elson'

console.log('Tamanho do Array => ' + aprovados.length)

console.log(aprovados)
console.log('') 
console.log('')
console.log('')

delete aprovados[2]
console.log('Ordenado depois do delete')
console.log(aprovados.sort())
console.log('') 
console.log('')
console.log('')

console.log('Depois do splite')
aprovados.splice(3,5)// apartir do 3 remova 5 posições
console.log(aprovados.sort())// ordena na ordem alfabetica
console.log('Tamanho do Array => ' + aprovados.length)