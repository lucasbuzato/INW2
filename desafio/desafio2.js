const leia = require ("prompt-sync")()

let nome = leia("Digite o nome do usuario: ") 
nascimento = parseInt(leia("Digite sua data de Nascimento: "))
let idade = 2023 - nascimento

if(idade<=3){
    console.log("Não atendemos Bebes")
}
else if(idade<=13){
    console.log(nome + "- Faixa Infantil")
}
else if(idade<=17){
    console.log(nome + "- Faixa Adolescente")
}
else if(idade<=65){
    console.log(nome + "- Faixa Adulto")
}
else{
    console.log("Não atendemos Idosos")
}