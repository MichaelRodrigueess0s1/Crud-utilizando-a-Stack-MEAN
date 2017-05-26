var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Usuario = require('./models/usuarioModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/usuarioRoutes');

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' Não encontrado'})
});

app.listen(port);

console.log('Servidor na porta: ' + port);
