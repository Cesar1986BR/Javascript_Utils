

console.log(this === global)// false pq this não aponta pra  Global e sim pra Module
console.log(this === module)// false pq this  é somente um objeto de referencia que aponta pra module.exports
console.log(this === module.exports)// True pq this  é um objeto de referencia pra module.exports
console.log(this === exports)// True pq this aponta pra mesma referencia

function logThis(){


    console.log('Dentro da funcao...')
    console.log(this === exports) // retorna false
    console.log(this === global)// retorna True, dentro de funcoes this sempre aponta pra global
}

logThis()