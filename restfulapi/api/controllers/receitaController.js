'use strict';

var mongoose = require('mongoose'),
  ReceitaModel = mongoose.model('Receitas');



exports.listaReceitas = function(req, res) {
  ReceitaModel.find({}, function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};


exports.criaReceita = function(req, res) {
  var novareceita = new ReceitaModel(req.body);
  novareceita.save(function(err, rece) {
    if (err)
      res.send(err);
    res.json(rece);
  });
};

exports.getReceita = function(req, res) {
  ReceitaModel.findById(req.params.recId, function(err, rec) {
    if (err)
      res.send(rec);
    res.json(rec);
  });
};

exports.atualizaReceita = function(req, res) {
  ReceitaModel.findOneAndUpdate(req.params.recId, req.body, {new: true}, function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};
// Task.remove({}).exec(function(){});
exports.deletaReceita = function(req, res) {

  ReceitaModel.remove({
    _id: req.params.recId
  }, function(err, rec) {
    if (err)
      res.send(err);
    res.json({ message: 'Receita apagada com sucesso!' });
  });
};
