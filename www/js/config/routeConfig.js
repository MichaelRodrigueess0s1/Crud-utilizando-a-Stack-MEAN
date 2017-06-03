angular.module("ReceitasAPP").config(function ($routeProvider) {	


	$routeProvider.when("/inicio", {
		templateUrl: "view/viewInicio.html",
		controller: "inicioCtrl"
	});	

	$routeProvider.when("/receitas", {
		templateUrl: "view/viewReceitas.html",
		controller: "receitaCtrl"
	});	

	$routeProvider.when("/novaReceita", {
		templateUrl: "view/viewNovaReceita.html",
		controller: "novaReceitaCtrl"
	});	


	$routeProvider.when("/detalhesReceita/:id", {
		templateUrl: "view/viewDetalhesReceita.html",
		controller: "detalhesReceitaCtrl",
		resolve: {
			receita: function (ReceitaAPI, $route) {
				 console.log($route.current.params.id);
				return ReceitaAPI.getReceita($route.current.params.id);
			}
		}
	});	

	$routeProvider.when("/editaReceita/:id", {
		templateUrl: "view/viewEditaReceita.html",
		controller: "editaReceitaCtrl",
		resolve: {
			
			rec: function (ReceitaAPI, $route) {
				 console.log($route.current.params.id);
				return ReceitaAPI.getReceita($route.current.params.id);
			}
		}
	});	




});