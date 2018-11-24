const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
console.log(pilotos)

pilotos.pop()//remove ultimo item do array

pilotos.push('Versatappen')

pilotos.shift()//remove primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona iten na primeira posicao do array

console.log(pilotos)

//Splice pode adicionar e remover elementos

//Adiconar
pilotos.splice(2,0,'Massa','Senna')
console.log(pilotos)

//Remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//novo array, pega a apartir da 2 posicao

console.log(algunsPilotos)