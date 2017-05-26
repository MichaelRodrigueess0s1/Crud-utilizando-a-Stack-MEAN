angular.module("ReceitasAPP").controller("detalhesReceitaCtrl", function ($scope, $routeParams, receita, MateriaPrimaAPI, IngredientesAPI) {    
	$scope.rec = receita.data;
	$scope.listaMateriaPrima = [];
    $scope.listaIngredientes = [];
	$scope.materiaSelecionada;
	$scope.TotalCusto = 0;
    $scope.tituloPagina = "Receita "+ $scope.rec.nome;

    var carregaMateriaPrima = function () {
			MateriaPrimaAPI.getMateriaPrimas().success(function (data) {
				$scope.listaMateriaPrima = data;
			}).error(function (data, status) {
				$scope.tituloApp = "Aconteceu um problema: " + data;
			});
		}; 

   var carregaIngredientes = function () {
			IngredientesAPI.getIngredientesReceita($scope.rec.id).success(function (data) {
				$scope.listaIngredientes = data;   
                $scope.TotalCusto = 0;
                data.forEach(function (item) {
				 $scope.TotalCusto += item.custo;
			});


			}).error(function (data, status) {
				$scope.tituloApp = "Aconteceu um problema: " + data;
			});
		}; 


   $scope.AdicionaIngrediente = function(ingrediente)
        {          
            console.log("Adicionando")  ;
            ingrediente.materiaPrima = $scope.materiaSelecionada;
			ingrediente.id_receita = $scope.rec.id;
			ingrediente.id_materia = $scope.materiaSelecionada.id;			
            ingrediente.medida = $scope.materiaSelecionada.medida;
            ingrediente.custo =  ingrediente.quantidade * $scope.materiaSelecionada.custo /    $scope.materiaSelecionada.quantidade ;
            var ingred = angular.copy(ingrediente);
            delete ingrediente.materiaPrima;
            IngredientesAPI.postIngrediente(ingrediente).success(function (data) {  
                $scope.MensagemAPI = "Ingrediente adicionado com sucesso";
                $scope.tipoAlerta = "success";
                carregaIngredientes();
		    }).error(function (data, status) {            
			    $scope.tituloApp = "Aconteceu um problema: " + data;
		    });
                                 
            //delete $scope.ingrediente;          
        };

        $scope.RemoveIngrediente = function(ingrediente)
        {
            console.log("Removendo ingrediente");
            console.log(ingrediente);
            IngredientesAPI.deleteIngrediente(ingrediente.id).success(function (data) {  
                $scope.MensagemAPI = "Ingrediente removido com sucesso!";
                $scope.tipoAlerta = "success";
                carregaIngredientes();
		    }).error(function (data, status) {            
			    $scope.tituloApp = "Aconteceu um problema: " + data;
		    });
        };

        carregaMateriaPrima();
        carregaIngredientes();
});