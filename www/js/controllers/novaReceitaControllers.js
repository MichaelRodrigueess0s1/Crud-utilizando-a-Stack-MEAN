  angular.module("ReceitasAPP").controller("novaReceitaCtrl", function ($scope, MateriaPrimaAPI, ReceitaAPI) {         
        $scope.tituloApp = "Receitas";
        $scope.MensagemAPI;
        $scope.tipoAlerta;
        $scope.tituloPagina = "Cadastro de Receitas";
        $scope.listaMaterias = []; 
        $scope.receita = {};
        $scope.receitaRetorno;

    var CarregaListaMateriaPrima = function ()
    {
        MateriaPrimaAPI.getMateriaPrimas().success(function(data)
        {
            $scope.listaMaterias = data;
        }).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
    }

    $scope.adicionareceita = function (receita) 
    {		
		receita.dataCadastro = new Date();
		ReceitaAPI.postReceita(receita).success(function (data) {            
             $scope.receitaRetorno = data;
			delete $scope.receita;		
            $scope.MensagemAPI = "Receita cadastrada com sucesso";
            $scope.tipoAlerta = "success";
            $scope.formularioReceita.$setPristine();
		}).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
	};

    $scope.limpaFormulario = function()
    {
         delete $scope.receita;
        $scope.formularioReceita.$setPristine();
    }
	

    CarregaListaMateriaPrima();
  
});