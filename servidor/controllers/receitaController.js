'use strict';

var mongoose = require('mongoose'),
Receita = mongoose.model('Receitas');


exports.lista = function(req, res)
{
   //Função para Selecionar Todos os 'usuarios' e verificar se há algum erro:
        Receita.find(function(err, receita) {
            if(err)
                res.send(err);

            res.json(receita);
        });        
}

exports.get = function(req, res) {
        //Função para Selecionar Por Id e verificar se há algum erro:
        Receita.findById(req.params.receita_id, function(error, receita) {
            if(error) 
                res.send(error);

            res.json(receita);
        });    
}

exports.atualiza = function(req, res) 
{
    //Primeiro: Para atualizarmos, precisamos primeiro achar o Usuario. Para isso, vamos selecionar por id:
                            Receita.findById(req.params.receita_id, function(error, receita) {
        if(error) 
            res.send(error);
        
        var receRec = req.body;
        
        //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
        //usuario.nome = usuRec.nome;
        //usuario.login = usuRec.login;
        //usuario.senha = usuRec.senha;
        receita.nome = receRec.nome;
        receita.dificuldade = receRec.dificuldade;
        receita.tipo = receRec.tipo;
        receita.tutorial = receRec.tutorial;
        receita.tempo = receRec.tempo;

        //Terceiro: Agora que já atualizamos os campos, precisamos salvar essa alteração....
        receita.save(function(error) {
            if(error)
                res.send(error);

            res.json({ message: 'Receita Atualizada com sucesso!' });
        });
    });
}

exports.cadastra = function(req, res)
{            
    
    //var novaReceita = JSON.parse(req.body);
    //console.log(novaReceita);    
    console.log(req.body);
    var receita = new Receita(req.body); //Crio uma instancia de Receita  
    console.log(receita);  
    receita.dataCadastro = new Date(); 
    //Realizo a operação de salvar
    receita.save(function(error){
        if(error) 
         res.send(error);

        res.json({ message: 'Receita criado!' });
    });
}


exports.deleta = function(req, res)
{  
    console.log(req);
      //Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
      Receita.remove({
      _id: req.params.receita_id
      }, function(error) {
          if(error)
              res.send(error);

          res.json({ message: 'Receita excluída com Sucesso! '});
      });
}

