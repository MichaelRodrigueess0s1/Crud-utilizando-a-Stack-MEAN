'use strict';

module.exports = function(app) {
	
	var ctrl = require('../controllers/receitaController');

	// Rotas de usuário
	app.route('/api/receita')
        .get(ctrl.lista)
		.post(ctrl.cadastra);

	app.route('/api/receita/:receita_id')
		.get(ctrl.get)
		.put(ctrl.atualiza)
		.delete(ctrl.deleta);
};
