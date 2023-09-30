var app = angular.module("myModule", []);

// One way Data-Binding
// app.controller("myController", function($scope) {
//     $scope.name = "Shivaji Singh";
// });

// Two way Data-Binding
app.controller("myController", function($scope) {
    $scope.name = "Shivaji Singh";
    $scope.name2 = "Golu Singh";
    $scope.student = {name:"Shivaji",surname:"Singh",city:"Varansi"};
});