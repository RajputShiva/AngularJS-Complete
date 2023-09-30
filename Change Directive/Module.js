var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    $scope.number = 0;
    // create function
    $scope.myFunction = function() {
        $scope.number++; // number = number + 1 (it's increament oprator)
    };
});