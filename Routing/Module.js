var app = angular.module("myModule", ['ngRoute']);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
  when("/page1",{
    // templateUrl:"views/page1.html"
    template:"<h1>Welcome To AngularJs Routing</h1>"
  }).
   when("/page2",{
    templateUrl:"views/page2.html"
  }).
   when("/page3",{
    templateUrl:"views/page3.html"
  }).
  otherwise({
    redirectTo:"index.html"
  });

}]);

app.controller("myController", function($scope) {
      
});
