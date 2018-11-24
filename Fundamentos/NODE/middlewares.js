const passo1 = (contexto, next)=>{
    contexto.valor1 = 'Middleware1'
    next()
}

const passo2 = (contexto, next)=>{
    contexto.valor2 = 'Middleware2'
    next()
}

const passo3 = (contexto)=>{
    contexto.valor3 = 'Middleware3'
}

const exec = (contexto, ...middleware)=>{
    const execPasso = indice =>{
        middleware && indice < middleware.length && 
        middleware[indice](contexto,()=> execPasso(indice +1))
    }

    execPasso(0)
}

const ctx = {}

exec(ctx,passo1,passo2,passo3)
console.log(ctx)