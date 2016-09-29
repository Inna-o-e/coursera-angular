(function(){
	'use strict';
	angular.module('ControllerAsApp', []).
	controller('LunchCheckController', LunchCheckController);

	LunchCheckController.inject = ['$scope'];
	function LunchCheckController($scope){

		$scope.showResult = false;

		$scope.checkDishes = function (){
			var dishes = ($scope.dishesList) ? $scope.dishesList.split(',') : [];
			$scope.resultError = "Please enter data first.";

			if(!$scope.dishesList || (dishes.length == 1 && (/^\s+$/.test(dishes[0]) || dishes[0]==""))){
				$scope.showError = true;
			}
			else{
				if(dishes.length <=3 ){
					$scope.resultMessage = "Enjoy!";
				}
				else{
					$scope.resultMessage = "Too much!";
				}
				$scope.showError = false;
			}

			$scope.showResult = true;
		}
	}
})();