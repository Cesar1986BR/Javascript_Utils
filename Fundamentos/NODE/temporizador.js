const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function(){
 console.log('Executando tarefa 1', new Date().getSeconds())
 })                                                                        // */5  executar de 5 em 5 seg
                                                                           // * em qualquer minuto 
                                                                            // 16h horas
                                                                            // * * igoora dia do mes - ignora mes
                                                                            // 0- domingo
                                                                            // 1- segunda
                                                                            // 2- terça
                                                                            // 3- quarta
                                                                            // 4- quinta
                                                                            // 5- sexta
                                                                            // 7- sabado
const tarefa2 = schedule.scheduleJob('*/3 * 16 * * 1', function(){
           console.log('Bolsonaro')
 })                                                                      
           
 
 setTimeout(() => {
     tarefa1.cancel()
     console.log('Cancelando tarefa 1!....')
 }, 20000);

 const regra = new schedule.RecurrenceRule()
 regra.dayOfWeek = [new schedule.Range(1,5)]// de seg a sexta
 regra.hour = 16 //16h
 regra.second = 30 // segundos

 const tarefa3 = schedule.scheduleJob(regra,()=>{
     console.log('Executando tarefa 3', new Date().getSeconds())
 })