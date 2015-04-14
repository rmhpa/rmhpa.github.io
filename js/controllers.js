

var tafApp = angular.module('tafApp', [])

tafApp.controller('tafCtrlr', ['$scope', '$http' , function($scope, $http) {

  // var url = "https://api.forecast.io/forecast/9442bd69cbecfef30c2898590fe38ec1/37.8267,-122.423" + "&callback=JSON_CALLBACK";
  var url = "http://www.aviationweather.gov/gis/scripts/TafJSON.php?jsonp=JSON_CALLBACK&bbox=-110,35,-103,40"
  $http.jsonp(url).success(function(data) {
    $scope.tafs = data.features

  });

  //$scope.tafBJC = $scope.tafs.features.filter(function(taf){return ( taf.properties.id == "KBJC") });

  $scope.isKBJC = function(taf) {
    return taf.properties.id == "KBJC"
  }

}]);

var forecastIoApp = angular.module('forecastIoApp', [])

forecastIoApp.controller('forecastIoAppCtrlr', ['$scope', '$http', function($scope, $http) {

  var url = "https://api.forecast.io/forecast/9442bd69cbecfef30c2898590fe38ec1/39.7509,-105.2337?callback=JSON_CALLBACK"
  $http.jsonp(url).success(function(data) {
    $scope.forecast = data

    });


}]);





// Infinite Scroll for weather resources avalible as images.

// var myApp = angular.module('myApp', ['infinite-scroll']);
// myApp.controller('DemoController', function($scope) {
//   $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
//
//   $scope.loadMore = function() {
//     var last = $scope.images[$scope.images.length - 1];
//     for(var i = 1; i <= 8; i++) {
//       $scope.images.push(last + i);
//     }
//   };
// });
