Array.prototype.forEach2 = function(callback){
            for (let i = 0; i < this.length; i++) {
                callback(this[i],i,this);
                
            }
}


const produtos = ['RTX 2070','I7 8600k','Placa mãe MSI','Gabinete Corsair 760T']

produtos.forEach2(function(nome,indice){
    console.log(`${indice +1 }) ${nome}`)
})