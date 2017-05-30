angular.module("ReceitasAPP").factory("ReceitaAPI", function ($http, config) {
	
	var _getReceitas = function () {
		//return $http.get(config.baseUrl + "/api/receitas");
		return $http.get("http://localhost:3000/api/receita")
	};

	var _getReceita = function (id) {
		return $http.get(config.baseUrl + "/api/receitas/"+id);
	};

	var _postReceita = function (receita) {
		return $http.post("http://localhost:3000/api/receita", receita);
	};

	var _putReceita = function (receita) {
		return $http.put(config.baseUrl + "/api/receitas", receita);
	};

	var _deleteReceita = function (id) {
		console.log("Apagando Receita"+id);
		return $http.delete("http://localhost:3000/api/receita/"+id);
	};

	return {				
		getReceitas: _getReceitas,
		getReceita: _getReceita,
		postReceita: _postReceita,
		putReceita: _putReceita,
		deleteReceita: _deleteReceita
	};
});