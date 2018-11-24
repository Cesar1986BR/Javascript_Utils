geraNumero = function({min = 0, max= 1000}){

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// maneiras de chamar o metodo
//obs: pode-se passar parametro usando a propria variavel criada na funçao, sem precisar criar variaveis.

const objeto = {max:50,min:10} // criar objeto com os dados min e max
console.log(geraNumero(objeto))// chama o metodo passando o objeto

console.log(geraNumero({min:50,max:500}))// chama metodo passando 2 parametros

console.log(geraNumero({}))//chama metodo sem parametro, gerando numero aleatorio entre 0 e 1000