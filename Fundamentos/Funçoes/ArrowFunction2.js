
let comparaComThis = function(param){
    console.log(this ===  param)
}

comparaComThis(global)//true

const obj = {}
comparaComThis = comparaComThis.bind(obj)//passa bind tentando dar contexto pra obj{} mas  fica fora do contexto mesmo assim
comparaComThis(global)//retorna false
comparaComThis(obj)//true


let codmparaComThisArrow = param => console.log(this === param)
codmparaComThisArrow(global)//false
codmparaComThisArrow(module.exports)//true