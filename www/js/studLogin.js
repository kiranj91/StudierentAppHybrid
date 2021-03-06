studApp.controller('loginCtrl', ['$scope', '$http','$stateParams', '$state', '$timeout', '$ionicFilterBar', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state, $timeout, ionicFilterBar, $ionicLoading) {

  $scope.$on("$ionicView.beforeEnter", function(event){
    console.log("Coming for the login controller..");

    });

  $scope.loginData = {
    username: '',
    password: '',
  };

  $scope.show = function() {
    $ionicLoading.show({
       template: '<p>"Signing in..."</p><ion-spinner icon="circles" class="spinner-balanced"></ion-spinner>',
       duration: 2000
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

  $scope.login = function() {

    $scope.show($ionicLoading);
    console.log("Coming to the login method..");

    $state.go('rentList');
};

$scope.backToLogin = function() {

  $state.go('login');

};
$scope.register = function() {

    $scope.show($ionicLoading);


     $state.go('register');
};
$scope.filter = function() {

    $scope.show($ionicLoading);


     $state.go('filter');
};

$scope.forgotPassword = function() {

    $state.go('forgotPasswordForm');

};




}])
