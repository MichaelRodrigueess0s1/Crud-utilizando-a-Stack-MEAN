'use strict';

module.exports = function(app) {
	
	var ctrl = require('../controllers/usuarioController');

	// Rotas de usuário
	app.route('/api/usuario')
        .get(ctrl.lista_usuarios)
		.post(ctrl.cadastra_usuario);

	app.route('/api/usuario/:usuario_id')
		.get(ctrl.get_usuario)
		.put(ctrl.atualiza_usuario)
		.delete(ctrl.deleta_usuario);
};
