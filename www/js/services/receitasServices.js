angular.module("ReceitasAPP").factory("ReceitaAPI", function ($http, config) {
	
	var _getReceitas = function () {
		return $http.get(config.baseUrl + "/api/receitas");
	};

	var _getReceita = function (id) {
		return $http.get(config.baseUrl + "/api/receitas/"+id);
	};

	var _postReceita = function (receita) {
		return $http.post(config.baseUrl + "/api/receitas", receita);
	};

	var _putReceita = function (receita) {
		return $http.put(config.baseUrl + "/api/receitas", receita);
	};

	var _deleteReceita = function (id) {
		return $http.delete(config.baseUrl + "/api/receitas/"+id);
	};

	return {				
		getReceitas: _getReceitas,
		getReceita: _getReceita,
		postReceita: _postReceita,
		putReceita: _putReceita,
		deleteReceita: _deleteReceita
	};
});