'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceitaSchema = new Schema({
  nome: {
    type: String,
    Required: 'Digite o nome da receita'
  },
    token: {
    type: String,
    Required: 'Digite um token'
  },
    dificuldade: {
    type: String,
    Required: 'Qual o nível de Dificuldade'
  },
   tipo: {
    type: String,
    Required: 'Insira o tipo da receita'
  },
   passos: {
    type: String,
    Required: 'Insira o passo a passo'
  },

    tempo: {
    type: String,
    Required: 'Insira o passo a passo'
  },

  data_criacao: {
    type: Date,
    default: Date.now
  },


  //status: {
  // type: [{
  //    type: String,
  //    enum: ['pending', 'ongoing', 'completed']
  //  }],
  //  default: ['pending']
  // }
});


module.exports = mongoose.model('Receitas', ReceitaSchema);