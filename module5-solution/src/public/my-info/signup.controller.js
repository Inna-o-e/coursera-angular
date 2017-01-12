(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'ApiPath', 'MyInfoService'];
function SignUpController($http, ApiPath, MyInfoService) {
  var form = this;
  form.hasError = false;
  form.saved = false;

  form.submit = function () {

    console.log('form.user.menunumber',form.user.menunumber)
    if(form.user.menunumber && form.user.menunumber != ''){
      $http.get(ApiPath + '/menu_items/'+form.user.menunumber+'.json').then(function (response) {
        sendFullInfo(response.data);
      }, function () {
        form.hasError = true;
        form.saved = false;
      });
    }
    else{
      sendFullInfo();
    }

  };

  function sendFullInfo(favoriteItem){
    var userInfo = form.user;
    userInfo.favoriteItem = favoriteItem;
    MyInfoService.setUserInfo(userInfo);
    form.saved = true;
    form.hasError = false;
  }

}


})();