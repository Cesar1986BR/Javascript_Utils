//Cadeia de prototipos (prototype chain


Object.prototype.attr0 = '0' // não é recomendavel fazer isso

const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2:'B', attr3: '3'}
const filho = {__proto__:pai,attr3:'C'} //__proto__:pai estou dizendo que se nao achar algum atributo em filho procure no pai, e assim por diante

console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro = 
{
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
       if(this.velAtual + delta <=  this.velMax){
          this.velAtual+= delta

       }else {
           this.velAtual = this.velMax
       }   
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari= {
    modelo: 'F40',
    velMax: 325 // shadowing
}


const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo} ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari,carro)// estou dizendo que ferrari vai ser prototipo de carro
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())