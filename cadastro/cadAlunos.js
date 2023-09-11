
//Requisitando o pacote Mongoose
const mongoose = require('mongoose');

//Criando a Chave de Conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS: 20000
    }
);

//Executando a Conexão
const db = mongoose.connection;

//Codigo de Teste de Conexão
db.on('error',console.error.bind(console, 'connection error: '))

db.once('open',function(){
    console.log("Estamos conectando ao mongoDB");
})


//Segunda Fase ----- usando o Banco

//Criando Sistema
const alunoSchema = new mongoose.Schema({
    matricula: String,
    nome: String,
    idade: Number,
    turma: String
})


//Criando Model
const Aluno = mongoose.model("Aluno", alunoSchema);

const maria= new Aluno({
    matricula: "rm501" ,
    nome:"Maria Silva" ,
    idade:16,
    turma:"1Mib"
});

maria.save();

const carlos= new Aluno({
    matricula: "rm564" ,
    nome:"Carlos Silva" ,
    idade:18,
    turma:"3Mib"
});

carlos.save()

