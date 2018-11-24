console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // todos esses tem um prototype



//Abaixo estou criando uma função no objeto String, não existe na API nativa, ou seja
// esta sendo criada agora, essa funcao recebe um texto e inverte as letras e 
//junta todas novamente ficando de tras pra frente
String.prototype.reverse =  function(){ 
    return this.split('').reverse().join('')
}

//retorna primeiro item de um array
Array.prototype.primeiro =  function(){ 
    return this[0]
}



console.log('Cesar e Elisama'.reverse())
console.log([1,3,5,6].primeiro())
console.log(['banana','melao','goiaba','melancia'].primeiro())
console.log('Flora e Chiquinha'.reverse())