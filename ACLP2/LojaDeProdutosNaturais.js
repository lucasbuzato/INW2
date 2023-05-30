class ProdutosNaturais{
    constructor(id,descricao,ativo,estoque,preco,peso,marca){
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.estoque = estoque;
    this.preco = preco;
    this.peso = peso;
    this.marca = marca
}

ativar(){
    this.ativo = true;
}
retirarEstoque(prodts){
    if(this.ativo){
    if(prodts==0){
        console.log("Impossivel fazer com o valor pedido")
    }
    else if (this.estoque<prodts){
        console.log("Impossivel fazer. Estoque Indisponivel")
    }
    else{
        this.estoque = this.estoque -= prodts 
        console.log("Valor da Compra é: "+ (prodts*this.preco)) 
    }
}
}
incluirEstoque(prodts){
    if(this.ativo){
        if(prodts==0){
            console.log("Impossivel fazer, não temos mais estoques")
        }
        else if(prodts>10){
            console.log("A Quantidade máxima de estoque é 10")
        }
        else{
            this.estoque += prodts
        }

}
}
}

const leia = require("prompt-sync")()
console.log("Mundo LBGS Saudavel")
console.log("Mundo LBGS Saudavel sempre estara com sua saude")
continuar=leia("Quer Fazer Compras S/N?")
    if(continuar=="N"||continuar =="n"){
        console.log("Até Breve")
    }
    else{
        console.log("Mundo LBGS Saudavel")
        console.log("Mundo LBGS Saudavel sempre estara com sua saude")
        console.log("Cadastro Inicial do Produto")
        let id = parseInt(leia("Coloque o id do Produto: "))
        let descricao = leia("Adicione a Descrição do Produto: ")
        let preco = parseFloat(leia("Adicione o Preço do Produto: "))
        let peso = parseFloat(leia("Adicione o Peso do Produto: "))
        let marca =leia("Adicione o Nome da Marca do Produto: ")
        let pro1 = new ProdutosNaturais(id,descricao,true,10,preco,peso,marca)
        console.log("Produto Cadastrado")
    
        for(let x=1;x<5;x++){
            console.log("Vendas Feitas Restantes: " + x)
            console.log("Produto:" + pro1.id)
            console.log("Estoque Atual do Produto:" + pro1.estoque)
            let prodts = 0

            prodts = parseInt(leia("Digite a Quantidade do Produto que quer retirar: "))
            pro1.retirarEstoque(prodts)
            console.log("Estoque Atual do Produto:" + pro1.estoque)
          
             
        }
        prodts = parseInt(leia("Digite a Quantidade do Produto que quer Incluir: "))
        pro1.incluirEstoque(prodts)
        console.log("Estoque Atual do Produto:" + pro1.estoque)

    }
