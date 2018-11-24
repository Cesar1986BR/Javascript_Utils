// IIFE -> Immediately Invoked Function Expression
(function(){

    console.log('Sera excurtado na hora!')
    console.log('Foge do escopo mais abrangente!')

    this.nome ='cesar'

    const mostrar = function(dado){
            console.log(dado)
    }
    this.funcao = mostrar;
})()

console.log(nome)
funcao('flora')