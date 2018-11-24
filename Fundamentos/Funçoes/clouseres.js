// Clousure é o escopo criado quando uma função é declarada
//Esse escopo permite a função a cessar e manipular variaveis externas a função

const x = 'Global'

function fora(){

    const x = 'Local'
    function dentro()
    {
        return x
    }
    return dentro
}

const minhafunc = fora()
console.log(minhafunc())// vai mostrar  'Local'