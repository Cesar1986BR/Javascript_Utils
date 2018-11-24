const bodyParser = require('body-parser')//responsavel por fazer parser do corpo do site
const express = require('express')
const app = express()//instacia do express

//adicionando middlewares
app.use(express.static('.'))//diz pra serveir todos os tipos de arquivos estaticos e extensoes dentro da pasta do projeto
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())//converte oque tiver em json no corpo da pagina em objeto
app.get('/teste',(req,res) => res.send('Ok'))

const multer = require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload')
    },
    filename: function (req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req,res) => {
        upload(req, res, err =>{
            if(err){
                return res.end('Ocorreu um erro ')
            }
            res.end('Concluído com sucesso')
        })
})

app.post('/formulario',(req,res)=>{
    res.send({
        ...req.body,
        id:1
    })
})

app.get('/parOuImpar',(req,res)=>{
     
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({ resultado: par ? 'par' : 'impar' })
})

app.listen(8081,() => console.log('Executando...'))
