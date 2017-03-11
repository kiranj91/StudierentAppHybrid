studApp.controller('detailCtrl', ['$scope', '$http','$stateParams', '$state', '$timeout', '$ionicFilterBar', '$rootScope','$rootParams',
function($scope, $http,$stateParams, $state, $timeout, $ionicFilterBar, $rootScope) {

    $scope.accResultout = false;
    $scope.accs = [];


    console.log("Coming to the detail controller...");
var resultAccs = [];
// $scope.searchBusy = true;
// $scope.backBusy = false;

    //$scope.accs = $stateParams.acc;
  //  console.log($stateParams.acc);

          console.log("Property details list.....", accs);
          console.log(accs.length);
              var acc = $scope.makeAcc( accs[0]);
              console.log("acc object is...", acc);
              resultAccs.push( acc);

            console.log("resultAccs..", resultAccs);


  .error( function( error) {
      console.log("error is", error);
  })
  .finally( function() {
    console.log("coming to finally section", resultAccs);
    $timeout(function() { $scope.accResultout = true;
  $scope.accs = resultAccs;}, 0);
  });
});

$scope.makeAcc = function( acc) {

  var localAcc = {};

  localAcc.address = acc.address;
  localAcc.contact_number = acc.contact_number;
  localAcc.description = acc.description;
  localAcc.title = acc.title;
  localAcc.type = acc.type;
  localAcc.email = acc.email;
  localAcc.img = "img/studierent_logo.png";
  localAcc.image = accs.images[0].path;
  localAcc.image = "http://www.studierent.space/img/properties/" + localAcc.image;


  localAcc.rent = acc.rent;

  return localAcc;



};



}]);
