  angular.module("ReceitasAPP").controller("receitaCtrl", function ($scope, MateriaPrimaAPI, ReceitaAPI) {         
        $scope.tituloApp = "Receitas";
        $scope.tituloPagina = "Controle de Receitas";
        $scope.receitas = []; 

    var carregaReceitas = function ()
    {
        ReceitaAPI.getReceitas().success(function(data)
        {
            $scope.receitas = data;
        }).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
    }
    carregaReceitas();
});