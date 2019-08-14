//Instaladores , Yarn , npm , node , Express, nodemon 
const express = require('express');//Importando o Express
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();//Criando o Servidor Com Express
const cors = require('cors');
mongoose.connect('mongodb+srv://felipe:88574753@cluster0-xuizx.mongodb.net/aula?retryWrites=true&w=majority',{
    useNewUrlParser:true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);


