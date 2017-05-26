angular.module("ReceitasAPP").factory("IngredientesAPI", function ($http, config) {
	
var _gerIngredientesReceita = function (id) {
		return $http.get(config.baseUrl + "/api/ingredientes_receita?receita="+id);
	};

	var _getIngredientes = function () {
		return $http.get(config.baseUrl + "/api/ingredientes_receita");
	};

	var _getIngrediente = function (id) {
		return $http.get(config.baseUrl + "/api/ingredientes_receita/"+id);
	};

	var _postIngrediente = function (materiaPrima) {
		return $http.post(config.baseUrl + "/api/ingredientes_receita", materiaPrima);
	};

	var _putIngrediente = function (materiaPrima) {
		return $http.put(config.baseUrl + "/api/ingredientes_receita", materiaPrima);
	};

	var _deleteIngrediente = function (id) {
		return $http.delete(config.baseUrl + "/api/ingredientes_receita/"+id);
	};

	return {				
		getIngredientesReceita: _gerIngredientesReceita,
		getIngredientes: _getIngredientes,
		getIngredientes: _getIngrediente,
		postIngrediente:_postIngrediente,
		putIngrediente:_putIngrediente,
		deleteIngrediente: _deleteIngrediente
	};
});