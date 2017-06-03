angular.module("ReceitasAPP").controller("editaReceitaCtrl", function ($scope, $routeParams, rec, ReceitaAPI) {    
       console.log("Carregou Edita Receita CRL");
	$scope.receita = rec.data;	
    console.log($scope.receita);
 
    $scope.tituloPagina = "Receita "+ $scope.receita.nome;


    $scope.editaReceita = function(recp)
    {
        ReceitaAPI.putReceita(recp, recp._id).success(function (data) {            
             $scope.receitaRetorno = data;
			//delete $scope.receita;		
            $scope.MensagemAPI = "Receita Editada com sucesso";
            $scope.tipoAlerta = "success";
            $scope.formularioReceita.$setPristine();
		}).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
    }


});