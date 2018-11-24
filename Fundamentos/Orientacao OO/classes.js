class Lancamento{
    constructor(nome = 'Generico', valor = 0){
      this.nome = nome,
      this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){ // quando coloca .. estou dizendo q esse parametro pode armazeznar 1 ou mais argumentos nele
      lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l =>{ 
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario =  new Lancamento('Salario',45000)
const contaLuz = new Lancamento('Luz', -220)
const Internet = new Lancamento('Internet', -175)

const contas = new CicloFinanceiro(06,2018)
contas.addLancamentos(salario, contaLuz,Internet)
console.log(contas.sumario(), contas.mes +"/"+contas.ano)