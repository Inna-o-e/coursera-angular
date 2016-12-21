(function(){
	'use strict';
	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController", NarrowItDownController)
	.service("MenuSearchService", MenuSearchService)
	.directive("foundList", foundList)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	function foundList() {
	  var ddo = {
	    templateUrl: 'foundItem.html',
	    //controller: NarrowItDownController,
	    //controllerAs: 'list',
	    //bindToController: true,
	    // scope: {
	    // 	items: ">",
	    // 	onRemove: '&'
	    // }
	  };

	  return ddo;
	}


	NarrowItDownController.$inject = ['MenuSearchService', "$http", "$filter", '$scope'];
	function NarrowItDownController(MenuSearchService, $http, $filter, $scope){
		var self = this;
		self.notFounded = false;

	  	self.narrowIt = function(searchText){
		  	if(!self.searchText)  {
		  		self.found = [];
		  		self.notFounded = true;
		  		return;
		  	}
		  	MenuSearchService.getMatchedMenuItems(searchText).then(function(found){
		  		console.log('found', found)
				$scope.found = found;
				self.found = found;
				if(self.found.length > 0){
					self.notFounded = false;
				}
				else{
					self.notFounded = true;
				}
		  	});
	  	}

		self.onRemove = function (itemIndex) {
		    self.found.splice(itemIndex, 1);
		    if(self.found.length > 0){
				self.notFounded = false;
			}
			else{
				self.notFounded = true;
			}
		};

	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath']
	function MenuSearchService($http, ApiBasePath){
		var service = this;

		service.getMatchedMenuItems = function(searchText){
			return $http({
		      method: "GET",
		      url: (ApiBasePath + "/menu_items.json")
		    }).then(function (response) {
			    var all = response.data.menu_items,
			    found = [];
		   	 	all.forEach(function(val, key){
		   	 		var patt = new RegExp(searchText);
		   	 		//console.log('patt.test(val.name)', patt.test(val.name))
		   	 		if(patt.test(val.name) || patt.test(val.short_name) || patt.test(val.description)){
		   	 			found.push(val);
		   	 		}
		   	 	})
			    return found;
			});

		}

	}

})();