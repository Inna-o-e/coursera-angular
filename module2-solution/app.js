(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController($scope){

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController($scope){

	}

	function ShoppingListCheckOffService(){
		var service = this;

		var toBuyItems = [
			{ name: "cookies1", quantity: 10},
			{ name: "cookies2", quantity: 6},
			{ name: "cookies3", quantity: 3},
			{ name: "cookies4", quantity: 9},
			{ name: "cookies5", quantity: 1}];
		var boughtItems = [];
	}


})();