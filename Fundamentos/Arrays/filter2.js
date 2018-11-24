//Implementando proprio filter
Array.prototype.filter2 = function(callback){

     const newArray = []    
     for(let i =0;i < this.length; i++){
         if(callback(this[i],i,this)){
            newArray.push(this[i])
         }
         
     }
     return newArray
}

const produtos = [
    {nome: 'Notebook ACER', preco: 3500, fragil: true},
    {nome: 'Motorola Razr', preco: 910, fragil: true},
    {nome: 'GTX 1070', preco: 1500, fragil: true},
    {nome: 'Nokia Chuck Norris', preco: 250, fragil: false},
    {nome: 'Copo de vidro', preco: 15.50, fragil: true},
    {nome: 'Copo de plastico', preco: 8.20, fragil: false},
]


const caro = produto =>   produto.preco >= 100
const fragil = produto =>   produto.fragil == false 


console.log(produtos.filter( function(p){
          return p.fragil == false 
}))

console.log('')
console.log('usando multiplo filter')

console.log(produtos.filter2(caro).filter2(fragil))
