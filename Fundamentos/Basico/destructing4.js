geraNumero = function([min = 0, max= 1000]){ // metodo com array como parametro

    if(min > max){
        [min,max] =[max,min]//inverte posicao dos aray caso min seja maior que max
    }
    const valor = Math.random() * (max -min) + min;
    return Math.floor(valor);
}

// maneiras de chamar o metodo
//obs: 


//const objeto = {max:50,min:10} // criar objeto com os dados min e max
//console.log(geraNumero(objeto))// chama o metodo passando o objeto

console.log(geraNumero([50,500]))// chama metodo passando 2 parametros
console.log(geraNumero([,500]))// chama metodo passando só 1 parametros

console.log(geraNumero([]))//chama metodo sem parametro, gerando numero aleatorio entre 0 e 1000