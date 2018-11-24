function func(){

}
//armazenar em uma variavel
 const funcao = function(){

 }
 //Armazenar em um atributo de objeto
 const objeto ={}
 objeto.falar = function(){return 'Opa'}
 console.log(objeto.falar())

 //passar função como parametro
 function run(fun) {
    fun()

 }
 run(function(){console.log('Executando..')})//passo no param uma função que imprime um texto

 //Uma funcao pode retornar ou pode conter outra função

 function soma(a,b){
     return function(c){
        console.log(a+b+c)
     }
 }

 soma(10,5)(4)//(10,5)parametro da primeira função, (4) parametro da segunda função