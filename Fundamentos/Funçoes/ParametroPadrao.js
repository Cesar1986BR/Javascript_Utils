//EStrategia 1 de como retornar valor padrão de uma função com parametros invalidos
function soma(a,b,c){
    a=a || 1 //caso qualquer parametro não seja passado ou ele seja falso, a variavel assume valor de 1 como padrão
    b=b || 1
    c=c || 1

    return a + b + c
}

console.log(soma())//retorna 3 pois nao passei parametro
console.log(soma(1,5,6))
console.log(soma(3))
console.log(soma(2,8))
console.log(soma(0,0,0))//bug(efeito colateral), quando passa 0 ele entendo como falso e todos parametros assume valor de 1

//Estrategia 2
console.log('Exemplo 2')
function soma1(a,b,c){
    a = a  !== undefined ? a : 1 // se for estritamente igual a undefined (nao é muito confiavel)
    b = 1 in arguments ? b : 1 //(nao é muito confiavel)
    c = isNaN() ? c : 1 //mais confiavel de usar pra verificar

    return a + b + c
}
console.log('')
console.log('')

console.log(soma1())
console.log(soma1(1,5,6))
console.log(soma1(3))
console.log(soma1(2,8))
console.log(soma1(0,0,0))

//Valor padrão recomendado  es2015

console.log('Exemplo 3 es2015')
function soma2(a=1,b=1,c=1){

    return a + b + c
}
console.log(soma2(8,0,5))