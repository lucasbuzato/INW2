const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite um numero entre 5 e 9 :"))


    if(5<=numero && numero<=9){
        do{
            numero=numero*3
        }
        while(numero<100){
            console.log(numero)
        }
        
    }
else{
    console.log("O número tem que estar entre 5 e 9")
}