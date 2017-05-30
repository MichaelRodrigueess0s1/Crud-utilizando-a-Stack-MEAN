/**
 * Arquivo: usuario.js
 * Author: MDR
 * Description: Arquivo onde trataremos o modelo do projeto. 
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 13/10/2016
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceitaSchema = new Schema({
    nome: String,
    dificuldade: String,  
    tipo: String,
    tutorial:String,
    tempo: String,
    dataCadastro: Date    
});

module.exports = mongoose.model('Receitas', ReceitaSchema);