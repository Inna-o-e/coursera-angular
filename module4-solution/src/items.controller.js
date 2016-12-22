(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(response) {
  var self = this;
  self.items = response.menu_items;
  self.categoryName = response.category.name;
}

})();