const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
   if(x == 5){
       break; //esse break tem efeito sobre bloco for, caso seja 5 interrompe  o laço
   }
     console.log('X = '+ nums[x])
}
console.log(' ')


for(y in nums){
    if(y == 5){
        // vai pra no indice 5, vai pular e ir do 6 em diante
        continue; //esse continue tem efeito sobre bloco for, caso seja 5 interrompe  o laço
    }
      console.log(`${y} =  ${nums[y]}`)
 }
 externo: for(a in nums){
    for(b in nums){
      if(a == 2 && b ==3)
         break externo

         console.log('par = ' +a,b)
    }
 }

 console.log('Até mais')