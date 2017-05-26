'use strict';

var mongoose = require('mongoose'),
Usuario = mongoose.model('Usuarios');


exports.lista_usuarios = function(req, res)
{
   //Função para Selecionar Todos os 'usuarios' e verificar se há algum erro:
        Usuario.find(function(err, usuario) {
            if(err)
                res.send(err);

            res.json(usuario);
        });
}

exports.get_usuario = function(req, res) {
        //Função para Selecionar Por Id e verificar se há algum erro:
        Usuario.findById(req.params.usuario_id, function(error, usuario) {
            if(error) 
                res.send(error);

            res.json(usuario);
        });    
}

exports.atualiza_usuario = function(req, res) {
        //Primeiro: Para atualizarmos, precisamos primeiro achar o Usuario. Para isso, vamos selecionar por id:
        Usuario.findById(req.params.usuario_id, function(error, usuario) {
            if(error) 
                res.send(error);
            
            var usuRec = req.body;

            //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
            usuario.nome = usuRec.nome;
            usuario.login = usuRec.login;
            usuario.senha = usuRec.senha;

            //Terceiro: Agora que já atualizamos os campos, precisamos salvar essa alteração....
            Usuario.save(function(error) {
                if(error)
                    res.send(error);

                res.json({ message: 'Usuário Atualizado!' });
            });
        });
    }

exports.cadastra_usuario = function(req, res)
{    
    console.log("Cadastrando usuario");
    var novoUsuario = req.body;
    var usuario = new Usuario(novoUsuario); //Crio uma instancia do usuário              
    //Realizo a operação de salvar
    usuario.save(function(error){
        if(error)        
          res.send(error);

          res.json({ message: 'Usuário criado!' });
    });
}
exports.deleta_usuario = function(req, res)
{  
      //Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
      Usuario.remove({
      _id: req.params.usuario_id
      }, function(error) {
          if(error)
              res.send(error);

          res.json({ message: 'Usuário excluído com Sucesso! '});
      });
}

