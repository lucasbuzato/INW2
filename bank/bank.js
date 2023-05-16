class conta{
    constructor(numero,cpf,saldo,ativa){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativa = ativa;
}


ativar(){
    this.ativa = true;
}

Credito(valor){
    if(this.ativa){
       if(valor<0){
        console.log("Impossivel Realizar, valor negativo...")
       }
       else if(valor == 0){
        console.log("Saldo zerado...")
    }
    else {
        this.saldo -= valor
    }
    }
    else{
        console.log("Conta Inativa...")
    }
}

Debito(valor){
    if(this.ativa){
    if(valor<0){
        console.log("Impossivel Realizar, valor negativo...")
    }
    else if(valor == 0){
        console.log("Saldo zerado...")
    }
    else if(valor > this.saldo){
        console.log("Impossivel realizar, Saldo Indisponivel...")
    }
    else {
        this.saldo -= valor
    }
}
else{
    console.log("Conta Inativa...")
}
}
}

const leia = require("prompt-sync")()
let numero = parseInt(leia ("Digite o numero da Conta : "))
let cpf = leia("Digite o cpf da conta : ")
let C1 = new conta(numero,cpf,0,false)
let op=""
let valor = 0
C1.ativar()
for(let x=1; x<=10; x++){
    op = leia("Digite D - debito ou C para Credito: ")
    if(op=="D"){
        valor = parseInt(leia ("Digite o valor para debito : "))
        C1.Debito(valor)
    }
    else if(op=="C") {
        valor = parseInt(leia ("Digite o valor para Credito : "))
        C1.Credito(valor)
    }
    console.log("Saldo atual conta : " + C1.saldo)
}

console.log("Saldo final da conta :" + C1.saldo)
