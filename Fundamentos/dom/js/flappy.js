//cria novo elemento html e atribui uma classe css
function novoElemento(tagname, className){
    const elem = document.createElement(tagname)
    elem.className = className
    return elem
}

//cria uma barreira e diz se elea vai ser inversa ou reversa
function Barreira(reversa = false){
    this.elemento = novoElemento('div','barreira')

    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')
    this.elemento.appendChild(reversa ? corpo : borda)//define se vem primeiro a barreira ou a borda superior
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height =  `${altura}px`
}


function ParDebarreiras(altura,abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras')

    this.superior = new Barreira(true)//cria a barreira superior
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)//this.superior.elemento faz referencia a Barreira-> elemento que ja foi criado
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () =>{
       // debugger
        const alturaSuperior = Math.random() * (altura - abertura)// recebe uma altura aleatoria pra barreira superior 
        const alturaInferior =  altura - abertura - alturaSuperior// recebe uma altura aleatoria pra barreira inferior 
        this.superior.setAltura(alturaSuperior)//configura a altura da superior
        this.inferior.setAltura(alturaInferior)
    }

   

    this.getX =() => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px` // posição onde é inciada a primeira barreira 
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)//configura a posição da primeira barreira
}

this.deslocamento = 2

function ConjustoBarreirras(altura,largura,abertura,espaco,notificarPonto){
    this.pares=[
        new ParDebarreiras(altura,abertura,largura),
        new ParDebarreiras(altura,abertura,largura + espaco),
        new ParDebarreiras(altura,abertura,largura + espaco * 2),
        new ParDebarreiras(altura,abertura,largura + espaco * 3)
    ]

    this.animar = () =>{
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da area do jogo
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio
             && par.getX() <  meio
             if(cruzouMeio) notificarPonto()
        });
    }
}

// keycodes are:

// left = 37
// up = 38
// right = 39
// down = 40


function Passaro(alturaJogo){
    let voando = false

    this.elemento = novoElemento('img','passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () =>parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`
    
    window.onkeydown = e =>{
        voando = true
        document.querySelector('img').classList.add('vertical-img-look-up')
    } 
    window.onkeyup = e =>{
        voando = false
        document.querySelector('img').classList.remove('vertical-img-look-up')
        document.querySelector('img').classList.add('vertical-img-look-dow')
    }


    this.animar = () =>{
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight


        if(novoY <= 0){
            this.setY(0)// se passaro tentar sair a baixo do tamanha da div do jogo
        }
        else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}


function Progresso(){
    this.elemento = novoElemento('span','progresso')
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos

        switch(pontos){ // muda velocidade de acordo com os pontos aumentao
            case 2:
            deslocamento = 3
            break
            case 5:
            deslocamento = 4
            break
            case 10:
            deslocamento = 5
            break
            case 15:
            deslocamento = 6
            break
        }

    }

    this.atualizarPontos(0)

}

function MsgDerrora(){
    this.elemento = novoElemento('span','perdeu')
    this.elemento.innerHTML = 'Voce perdeu'
}



function estaoSobrePostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const ladoEsquerdoA = a.left
    const ladoDireitoA = a.width
    const ladoEsquerdoB = b.left
    const ladoDireitoB = b.width

    const topA = a.top
    const alturaA = a.height
    const topB = b.top
    const alturaB = b.height

    const horizontal = ladoEsquerdoA + ladoDireitoA >= ladoEsquerdoB
        && ladoEsquerdoB + ladoDireitoB >= ladoEsquerdoA

    const vertical = topA + alturaA >= topB
    && topB + alturaB >= topA

    return horizontal && vertical
}

function Colisao(passaro, barreira){
    let colidiu = false

    barreira.pares.forEach(ParDebarreiras =>{
        if(!colidiu){
            const superior = ParDebarreiras.superior.elemento
            const inferior = ParDebarreiras.inferior.elemento
            
            colidiu = estaoSobrePostos(passaro.elemento,superior)
            || estaoSobrePostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function FlappyBird(){

    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const msg = new MsgDerrora()
    const progresso = new Progresso()
    const barreiras = new ConjustoBarreirras(altura,largura,280,400,
        ()=> progresso.atualizarPontos(pontos++))
    const passaro = new Passaro(altura)    

    

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    this.start = ()=>{
        // loop do jogo

      const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()

            if(Colisao(passaro, barreiras)){
                clearInterval(temporizador)
                    
                areaDoJogo.appendChild(msg.elemento)
                
                setInterval(()=>{
                    window.location.reload()
                },3000)
             
            }
        },20)
    }

}
this.elemento = novoElemento('span','processo2')
this.elemento.innerHTML = 'Voce perdeu'
 new FlappyBird().start() //INICIA O GAME


 //BLOCO DE TESTE
// const barreiras =  new Barreirras(700,1200,250,400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// areaDoJogo.appendChild(passaro.elemento)

// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(()=>{
//     barreiras.animar()
//     passaro.animar()
// },20)

