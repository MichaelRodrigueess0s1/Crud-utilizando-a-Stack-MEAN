  angular.module("ReceitasAPP").controller("inicioCtrl", function ($scope, MateriaPrimaAPI, ReceitaAPI) {         
        $scope.tituloApp = "ReceitasCtrl";
        $scope.tituloPagina = "Controle de Receitas";
        $scope.receitas = [];
  });
