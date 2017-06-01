var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Usuario = require('./models/usuarioModel'),
  Receita = require('./models/ReceitaModel');
  bodyParser = require('body-parser'); 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  //è necessário assinar o cabecalho das requisições para poder permitir requisições provindas de outros servidoews
  res.header("Access-Control-Allow-Origin", "*");
  //Aqui é feito a liberação de quais metodos serão aceitos
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routeUsuario = require('./routes/usuarioRoutes');
var routeReceita = require('./routes/receitaRoutes');

routeUsuario(app);
routeReceita(app);






app.listen(port);

console.log('Servidor na porta: ' + port);
