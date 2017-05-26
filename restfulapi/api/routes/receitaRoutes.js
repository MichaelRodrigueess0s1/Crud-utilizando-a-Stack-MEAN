'use strict';

module.exports = function(app) {
	var receitaController = require('../controllers/receitaController');

	app.route('/')
		.get(receitaController.listaReceitas)
		.post(receitaController.criaReceita);

	app.route('/:recId')
		.get(receitaController.getReceita)
		.put(receitaController.atualizaReceita)
		.delete(receitaController.deletaReceita);
};
