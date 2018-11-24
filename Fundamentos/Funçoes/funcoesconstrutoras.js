function Carro(velocidadeMaxima = 200, delta  = 5){
  //atirbuto privado
  let velocidadeAtual = 0;

//metodo publico
 this.acelerar = function(){
     if(velocidadeAtual + delta <= velocidadeMaxima){
        velocidadeAtual += delta
     }else{
            velocidadeAtual = velocidadeMaxima
   }
 }

 this.getVelocidadeAtual = function(){
     return velocidadeAtual;
 }

}

const gol = new Carro
gol.acelerar()
console.log(gol.getVelocidadeAtual())

const newcivic = new Carro(350,20)
newcivic.acelerar()
newcivic.acelerar()
newcivic.acelerar()

console.log(newcivic.getVelocidadeAtual())