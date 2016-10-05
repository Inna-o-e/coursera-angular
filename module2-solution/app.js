(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var self = this;

		self.addToBought = function(index){
			ShoppingListCheckOffService.addToBought(index);
		}

		self.items = ShoppingListCheckOffService.getToBuyItems();
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var self = this;
		self.items = ShoppingListCheckOffService.getBoughtItems();
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

		service.addToBought = function(index){
			boughtItems.push(toBuyItems[index]);
			toBuyItems.splice(index, 1);
		};

		service.getToBuyItems = function(){
			return toBuyItems;
		};
		service.getBoughtItems = function(){
			return boughtItems;
		};


	}


})();