process.stdin.setEncoding('utf8');

const anonimo = process.argv.indexOf('-a') !== -1
process.stdout.write('Fala Anônimo')
process.stdout.write('Informe seu nome:')



if(anonimo){
    process.stdout.write('Fala Anônimo \n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome:')
    prompt.stdin.on('data',data => {
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ai `)
        process.exit()
    })
}