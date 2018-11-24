// O método de JavaScript bind possui vários usos.Normalmente, 
// ele é usado para preservar o contexto de execução para uma função que executa em outro contexto.
// bind cria uma nova função com o mesmo corpo da função original.
// O primeiro argumento passado para bind especifica o valor da palavra-chave this na função associada

function Pessoa(){
    this.idade = 0;
    setInterval(function(){
        this.idade++
       console.log(this.idade)
    }.bind(this),1000) 
}

new Pessoa