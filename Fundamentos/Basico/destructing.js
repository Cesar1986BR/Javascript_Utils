//novo recurso 2015.
//resgatar dados de um objeto 

const pessoa = {

    nome:'cesar',
    idade:31,
    cidade:'curitiba',
    endereco: {
        rua:'Rua  marachal',
        numero:250
    }
}

const{nome,idade} = pessoa // diz que quer a propriedade nome e idade do objeto Pessoa
console.log(nome,idade)

const {endereco: {rua,numero,cidade} }= pessoa
console.log(rua,numero,cidade) // retorna os dados do objeto 'endereco' dentro de pessoa, porem cidade vai retornar undefined pq nao exsiste