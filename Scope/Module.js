var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    $scope.name = "Shivaji Singh";
});


// Isolated scope:-
app.controller("ctr1", function($scope) {
    $scope.name = "Shivaji Singh";
});

app.controller("ctr2", function($scope) {
    $scope.name = "Golu Singh";
});



// Shared scope:-
app.run(function($rootScope) {
   $rootScope.name1 = "Root Scope";
});



// Inherited scope:-
app.controller("ctr1", function($scope) {
    $scope.name2 = "Shivaji Singh";
});

app.controller("ctr2", function($scope) {
    $scope.name3 = "Golu Singh";
});

app.controller("ctr3", function($scope) {
    $scope.name4 = "Shivam Singh";
});