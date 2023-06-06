const leia = require ("prompt-sync")()
let numero
numero= parseInt(leia("Digite um numero inteiro: ") )
let total = 0
for(let x=1; x<=numero; x++){
    if(x%2){
        console.log(x)
        total += x
    }
    

}
console.log(total)