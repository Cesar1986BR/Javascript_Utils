function getInteriroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0;
do{
    opcao = getInteriroAleatorioEntre(-1,10)
    console.log('Opcao escolhida foi=> ' + opcao)
} while (opcao != -1) //quando opção for  = -1 para

console.log('Até a proxima')