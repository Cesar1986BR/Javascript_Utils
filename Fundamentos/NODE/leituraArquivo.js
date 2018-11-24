'use strict'
const fs = require('fs')


//lendo file de modo sincrono
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//lendo file de modo  Assincrono


fs.readFile(caminho,'utf-8',(err,conteudo)=>{

    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

//leitura direta

const config = require('./arquivo.json') 
console.log(config.db)

//Lendo pasta

fs.readdir(__dirname,(err,arquivo)=>{
    console.log('Conteudo da pasta')
    console.log(arquivo)
})