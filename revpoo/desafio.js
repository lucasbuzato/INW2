const leia = require("prompt-sync")()

let nomes=['','','','']
let notas = [0,0,0,0]



for(let x=0;x<nomes.length;x++){
    console.log(nomes[x])
    nomes[x] = leia("Digite o nome do aluno: ")
    notas[x] = parseInt(leia("Digite a Nota: "))

}
console.log("BOLETIM")
console.log("NOME \t NOTAS")
for(let x=0; x<nomes.length; x++){
    if(notas[x]<=5){
        console.log(nomes[x]+'\t'+notas[x] +'\t'+ "Recuperação")
    }
    else{
        console.log(nomes[x]+'\t'+notas[x] +'\t'+ "Aprovado")
    }

}