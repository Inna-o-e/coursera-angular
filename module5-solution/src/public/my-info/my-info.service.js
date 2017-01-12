(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;

  service.userInfo = {};

  service.getUserInfo = function () {
    return service.userInfo;
  };

  service.setUserInfo = function (userInfo) {
    service.userInfo = userInfo;
  };

}



})();