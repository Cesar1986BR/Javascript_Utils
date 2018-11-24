const fabricante = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
  console.log(`${indice + 1}, ${nome}`)
}

// abaixo pra cada item encontrado chama callback , no caso chama metodo imprimir() a cada item encontrado no array
fabricante.forEach(imprimir)//imprimi array mostrando os indices

fabricante.forEach(function(fabricante){ //imprimi mostrando somente nome
    console.log(fabricante)
})

console.log("")
console.log("Versao com arrow function")
fabricante.forEach(fabricante => // Versao com arrow, imprimi mostrando somente nome
    console.log(fabricante)
)