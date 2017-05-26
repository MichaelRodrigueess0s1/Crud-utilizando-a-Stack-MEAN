  angular.module("ReceitasAPP").controller("indexCtrl", function ($scope) {         
        
		$scope.logado = false;		
		$scope.AcessoNegado = false;
		$scope.logar = function (conta)
		{
			console.log(conta);
			if(conta.login == "adm@pw.com" && conta.senha == "12345")
			{
				$scope.logado = true;								
			} else
			{
				$scope.AcessoNegado = true;
			}	
		}

  	});
