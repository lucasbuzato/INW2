class animal{
    constructor(especie,raca,peso,porte,anoNascimento){
        this.especie = especie;
        this.raca = raca;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento
    }
    fazBarulho(){
        console.log("fazendo barulho...")
    }

    voltaIdade(anoAtual){
        return (anoAtual - this.anoNascimento)
    }

}
class gato extends animal{
    constructor(especie,cor,raca){
        super(especie);
        this.cor = cor;
        this.raca = raca

    }

    Miar(){
        console.log("Miando...")
    }
}


let Bicho1= new animal("Felino","Tigre",200,"grande",2000)
let Bicho2= new animal("Galinacio","Galinha",2,"pequeno",2022)
let Bicho3= new gato("Felino","Preto","Persa")
console.log(Bicho1.especie)
Bicho1.fazBarulho()
console.log(Bicho1.voltaIdade(2023))
console.log(Bicho3.especie)
Bicho3.fazBarulho()
Bicho3.Miar()
Bicho3.anoNascimento = 2000
console.log(Bicho3.voltaIdade(2023))


