studApp.controller('rentListCtrl', ['$scope', '$http','$stateParams', '$state', '$timeout', '$ionicFilterBar', '$rootScope',
function($scope, $http,$stateParams, $state, $timeout, $ionicFilterBar, rootScope) {

    $scope.accResultout = false;

    $scope.accs = [];

    $scope.filterText = '';

    console.log("Coming to the rentlist controller...");

  var backHandler = $scope.$on('onBack', function(event) {
  console.log("backBusy normal is..", $scope.backBusy);
  console.log("Coming back to the org.");
  console.log("value of pCounter is", rootScope.pCounter);
    console.log("calling only once");
  console.log("qeeOrgOp orgs are..", qeeOrgOp.orgs);

  $timeout(function() { $scope.accResultout = false;}, 0);

});



$scope.$on('searchFilter', function(event, searchText) {
  // $scope.forSearch = true;
  // rootScope.sCounter++;
console.log("coming from search Filter with text..", searchText);
var resultAccs = [];
// $scope.searchBusy = true;
// $scope.backBusy = false;

  $scope.searchAccs( searchText)
  .success( function( accs) {

console.log("calling first one..");
 console.log("The search results are..", accs);
      if(accs) {

          var accsCount = accs.properties.length;

          if(accsCount < 10) {
              console.log("List finished.....");
          }

          console.log("List finished.....", accs.properties);

          for( var i=0; i<accs.properties.length; i++) {
              var acc = $scope.makeAcc( accs.properties[i]);
              console.log("acc object is...", acc);
              resultAccs.push( acc);
            }
            console.log("resultAccs..", resultAccs);
      }
  })
  .error( function( error) {
      console.log("error is", error);
  })
  .finally( function() {
    console.log("coming to finally section", resultAccs);
    $timeout(function() { $scope.accResultout = true;
  $scope.accs = resultAccs;}, 0);
  });
});

$scope.backToLogin = function() {

  $state.go('login');

}


$scope.showFilterBar = function() {
  // rootScope.returned = false;
  console.log("coming for the filter bar..");
  filterbar = $ionicFilterBar.show({

    items: $scope.accs,
    expression: function (filterText, value, index, array) {
    },
    update: function ( filteredItems, text) {
      // $scope.orgs = filteredItems;
      console.log("searched text is", text);

    }
  });

};

$scope.searchAccs = function( searchString) {

    console.log("search string is....", searchString);
    var queryString = searchString;


    return $http.get( "http://studierent.space/properties/search.json?address" + "=" + searchString);


};



$scope.makeAcc = function( acc) {

  var localAcc = {};

  localAcc.address = acc.address;
  localAcc.contact_number = acc.contact_number;
  localAcc.description = acc.description;
  localAcc.title = acc.title;
  localAcc.type = acc.type;
  localAcc.total_size = acc.total_size;
  localAcc.img = "img/studierent_logo.png";
  localAcc.image = acc.images[0].path;
  localAcc.image = "http://www.studierent.space/img/properties/" + localAcc.image;


  localAcc.rent = acc.rent;

  return localAcc;



};



}]);
