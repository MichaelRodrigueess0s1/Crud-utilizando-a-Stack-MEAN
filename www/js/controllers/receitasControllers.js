  angular.module("ReceitasAPP").controller("receitaCtrl", function ($scope, MateriaPrimaAPI, ReceitaAPI) {         
        $scope.tituloApp = "Receitas";
        $scope.tituloPagina = "Controle de Receitas";
        $scope.receitas = []; 

    var carregaReceitas = function ()
    {
        ReceitaAPI.getReceitas().success(function(data)
        {
            $scope.receitas = data;
            console.log(data);
        }).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
    }

    $scope.apagaReceita = function(id)
    {
        console.log("Apagando Receita");
        console.log(id);
        ReceitaAPI.deleteReceita(id).success(function(data)
        {
            $scope.tituloApp = "Receita Apagada com sucesso!";
              carregaReceitas();
        }).error(function(data, status){
            $scope.tituloApp = "Aconteceu um problema: " + data;
        });
    }



    carregaReceitas();
});