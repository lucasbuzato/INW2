const leia = require ("prompt-sync")()

let usuario = leia("Digite o nome do usuario: ") 
let salario = leia("Digite o salario do usuario: ") 
let imposto

if(salario<=2500){
    console.log(usuario + "Voce está isento do imposto")
}

else if(salario<=5000){
    imposto = salario * 0.15
    console.log(usuario +"por seu salario ser de " + salario + " o imposto que você deve pagar é de " + imposto)
    console.log("Seu salario Liquido é de :" + (salario-imposto))
}
else {
    imposto = salario * 0.25
    console.log (usuario +"por seu salario ser de " + salario +"o imposto que você deve pagar é de " + imposto)
    console.log("Seu salario Liquido é de :" + (salario-imposto))
}