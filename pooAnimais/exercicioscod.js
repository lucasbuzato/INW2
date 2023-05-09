class Conta{
    constructor(numero,saldo,ativa){
    this.numero = numero;
    this.saldo = saldo;
    this.ativa = ativa
}

credito(valor){
    this.saldo = this.saldo + valor
}

debito(valor){
    if(valor<0){
        console.log("Impossivel fazer. Numero negativo")
    }
    else if (this.saldo<valor){
        console.log("Impossivel fazer. Saldo Indisponivel")
    }
    else{
        this.saldo = this.saldo - valor  
    }
    
}
}

let c1 = new Conta(15,0,true)
console.log("Saldo Atual:" + c1.saldo)
c1.credito(100)
console.log("Saldo Atual:" + c1.saldo)
c1.debito(50)
console.log("Saldo Atual:" + c1.saldo)
c1.debito(60)
console.log("Saldo Atual:" + c1.saldo)