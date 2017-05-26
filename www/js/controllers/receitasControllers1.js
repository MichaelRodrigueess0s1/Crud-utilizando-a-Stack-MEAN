  angular.module("ReceitasAPP").controller("receitaCtrl", function ($scope, MateriaPrimaAPI, ReceitaAPI) {
         
        $scope.tituloApp = "Receitas";
        $scope.produtoAtual;
        $scope.TotalCusto = 0;
        $scope.QtdIngrediente = 0;
        $scope.materiaPrimaAtual;
        $scope.ingredienteAtual;
        $scope.ProdutoUnidade = 0;
        $scope.ProdutoPacote = 1;
        $scope.ProdutosReceita = 1;
        $scope.CustoUnidade = 0;
        $scope.CustoPacote = 0;
        $scope.LucroUnidade = 0;
        $scope.Margem = 0;
        $scope.PrecoVendaPacote = 0;        
        $scope.LucroPacote = 0;
        $scope.PrecoVendaUnidade = 0;
        $scope.listaMateriaPrima = [];
        $scope.receitas = [];

        var carregaMateriaPrima = function () {
		MateriaPrimaAPI.getMateriaPrimas().success(function (data) {
			$scope.listaMateriaPrima = data;
		}).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
	};     


    var carregaReceitas = function ()
    {
        ReceitaAPI.getReceitas().success(function(data)
        {
            $scope.receitas = data;
        }).error(function (data, status) {
			$scope.tituloApp = "Aconteceu um problema: " + data;
		});
    }

        $scope.produtos = [
            //{id:1, nome:"Biscoito Cacau",  listamateriaPrima: []  },
            //{id:2, nome:"Biscoito Banana",  listamateriaPrima: [] },
            //{id:3, nome:"Biscoito Amendoin", listamateriaPrima: [] }            
        ];

        $scope.AdicinarProduto = function(produto)
        {
            produto.id = $scope.produtos.length + 1;
            produto.listaingredientes = [];
            var prod = angular.copy(produto);
            $scope.produtos.push(prod);
            delete $scope.produto;
        };

        $scope.AdicionaIngredienteProduto = function(ingrediente)
        {
            ingrediente.id = $scope.produtoAtual.listaingredientes.length + 1;
            ingrediente.materiaPrima = $scope.materiaPrimaAtual;
            ingrediente.medida = $scope.materiaPrimaAtual.medida;
            ingrediente.custo =  ingrediente.qtd * $scope.materiaPrimaAtual.custo /    $scope.materiaPrimaAtual.quantidade ;
            var ingred = angular.copy(ingrediente);
            $scope.TotalCusto += ingrediente.custo;
            $scope.produtoAtual.listaingredientes.push(ingred);            
            delete $scope.ingrediente;
            $scope.CalculaLucro();
        };


        $scope.RemoveIngredienteProduto = function(ingrediente)
        {  
           
            //Seleciona o indice da lista de ingredientes do produto selecionado
            var indice = $scope.produtos.indexOf(ingrediente);
            $scope.TotalCusto -= ingrediente.custo;
            //remove o intem relacionado ao indice encontrado acima e a quantidade
            $scope.produtoAtual.listaingredientes.splice(indice, 1); 
            $scope.CalculaLucro();
        };

        $scope.CalculaLucro = function()
        {
         if($scope.Margem == 0)
         {
             $scope.Margem = 1;
         }
            $scope.CustoUnidade = $scope.TotalCusto/$scope.ProdutosReceita;
            $scope.LucroUnidade = $scope.CustoUnidade * ($scope.Margem/100);
            $scope.CustoPacote =  $scope.CustoUnidade * $scope.ProdutoPacote;
            $scope.LucroPacote = $scope.CustoPacote * ($scope.Margem/100);
            $scope.PrecoVendaPacote = $scope.CustoPacote + $scope.LucroUnidade;
            $scope.PrecoVendaUnidade = $scope.CustoUnidade + $scope.LucroUnidade;
        };
        carregaMateriaPrima();

    });