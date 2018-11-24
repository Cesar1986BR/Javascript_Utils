const soma = function(x,y){ 
    return x + y;
}


//abaixo funcao com 3 parametros o terceiro é uma funcao que dpor padrao é funcao soma() a cima
//pode-se criar outra funcao e passar no lugar dela, caso nao passe nada sempre sera a soma()
const imprimirResultado = function(a,b,operacao= soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){// foi passado no parametro uma funcao anonima
    return x - y;
})
imprimirResultado(3,4,(x,y)=> x* y)//passado uma funcao arrow onde mudo de soma pra ser uma operacao de multiplicação