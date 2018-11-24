const Pessoa ={
    nome: 'Rebeca',
    idade: 24,
    peso: 63
}

console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa))


Object.entries(Pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(Pessoa, 'dataNascimento',{
   enumerable: true,
   writable: false,
   value:'16/10/2018'
})

Pessoa.datanascimento = '16/10/2019'

console.log(Pessoa.datanascimento)
console.log(Object.keys(Pessoa))



//Onject assign - atribuium ou mais objetos a outro objetos, como se fosse uma concatenação de objetos

//exemplo

const  destino = {a: 1}

const  obj01 = {
    a: 1,
    b: 3
}
const  obj02 = {
    a: 1,
    b: 54, 
    c: 6
}

Object.assign(destino,obj01,obj02)

console.log('Objetos contatenados')
console.log(Object.keys(destino))