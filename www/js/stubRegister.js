studApp.controller('loginCtrl', ['$scope', '$http','$stateParams', '$state', '$timeout', '$ionicFilterBar', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state, $timeout, ionicFilterBar, $ionicLoading) {

  $scope.$on("$ionicView.beforeEnter", function(event){
    console.log("Coming for the register controller..");

    });

  $scope.registerData = {
    FirstName: '',
    LastName: '',
     Address: '',
    ContactNo: '',
     Email: '',
    Passowrd: '',
     ConfirmPassword: '',
   
  };

  $scope.show = function() {
    $ionicLoading.show({
       template: '<p>"Signing up..."</p><ion-spinner icon="circles" class="spinner-balanced"></ion-spinner>',
       duration: 2000
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

 $scope.signup = function() {

    $scope.show($ionicLoading);


    $state.go('rentList');
};


}])



