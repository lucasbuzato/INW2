const leia = require("prompt-sync")()
let numero = 0
let soma = 0
let maior = 0
quantidade = 0


for(let x=1; numero>=0; x++){

numero=parseInt(leia("digite um numero"))

if(numero>=0){
    soma = soma + numero
    quantidade++
}
if(maior<numero){
    maior=numero
}
}
console.log("Total : " + soma)
console.log("Maior : " + maior)
console.log("Quantidade : " + quantidade)