const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' // contem lista json
const axios = require('axios')// faz requisição de algo que está remoto ex: http

//Desafio- pegar array Json retornado e filtrar que seja mulher, more na china e tenha menor salario
const apenasMulher = mulher => mulher.genero == 'F' //retorna somente mulher
const porPais = nomepais => nomepais.pais == 'China'//somente quem for da china

const menorSalario = (func,funcAtaul)=>{ // retorna menor salario
   return func.salario < funcAtaul.salario ? func : funcAtaul//logica  se func recebe 5k e atual recebe 4k, retorne atual ou vice versa
}


  axios.get(url).then(resp=>{
     const result =  resp.data

     const func = result.filter(apenasMulher)
     .filter(porPais)
     .reduce(menorSalario)

      console.log(func)
  })  
  .catch(error=>{
    console.log(error);
  });
