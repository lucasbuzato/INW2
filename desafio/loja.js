const leia= require("prompt-sync")()

 

let cod = ["P01","P02","P03","P04"]
let prod = ["camisa","calca","saia","short"]
let preco = [0,0,0,0]

 


console.log("codigo\tproduto\tpreço")
for(let x=0; x<4; x++){
    console.log(cod[x]+"\t"+prod[x])
    preco[x]=parseFloat(leia("Coloque o preço do produto "))
}

 

console.log("codigo\tproduto\tpreço")
for(let x=0; x<4; x++){
    console.log(cod[x]+"\t"+prod[x]+"\t"+preco[x])
}

 

console.log("alteração de dados")

 

let codigo = leia("digite o codigo do produto que voce deseja trocar o nome: ")
for(let x=0; x<4; x++){
    if(codigo==cod[x]){
    console.log("Nome atual do produto "+produtos[x])
    produtos[x] = leia("digite o novo nome: ")
    }
}

 

console.log("codigo\tproduto\tpreço")
for(let x=0; x<4; x++){
    console.log(cod[x]+"\t"+prod[x]+"\t"+preco[x])
}
