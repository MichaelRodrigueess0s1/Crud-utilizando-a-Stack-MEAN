angular.module("ReceitasAPP").factory("MateriaPrimaAPI", function ($http, config) {
	
	var _getMateriasPrimas = function () {
		return $http.get(config.baseUrl + "/api/materiaprimas");
	};

	var _getMateriaPrima = function (id) {
		return $http.get(config.baseUrl + "/api/materiaprimas/"+id);
	};

	var _postMateriaPrima = function (materiaPrima) {
		return $http.post(config.baseUrl + "/api/materiaprimas", materiaPrima);
	};

	var _putMateriaPrima = function (materiaPrima) {
		return $http.put(config.baseUrl + "/api/materiaprimas", materiaPrima);
	};

	var _deleteMateriaPrima = function (id) {
		return $http.delete(config.baseUrl + "/api/materiaprimas/"+id);
	};

	return {				
		getMateriaPrimas: _getMateriasPrimas,
		getMateriaPrima: _getMateriaPrima,
		postMateriaPrima: _postMateriaPrima,
		putMateriaPrima: _putMateriaPrima,
		deleteMateriaPrima: _deleteMateriaPrima
	};
});