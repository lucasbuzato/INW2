
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
const contatoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    email: String
})


//Criando Model
const Contato = mongoose.model("Contatos", contatoSchema);

const epaminondas= new Contato({
    nome:"epaminondas" ,
    idade:16,
    email:"epaminondas@gmail.com"
});

epaminondas.save();

const carla= new Contato({
    nome:"Carla" ,
    idade:18,
    email:"carla@gmail.com"
});

carla.save()

