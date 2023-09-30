var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    // create array here
    $scope.fruits = ["Apple","Banana","Grapes","Mango","Strawberry","Apricot","Custard Apple"];
    // create object here
    $scope.student = {name:"Shivaji Singh",gender:"Male",age:16};
    // create array of object
    $scope.employees = [
        {name:"Shivaji Singh",city:"Varansi",age:27},
        {name:"Golu Singh",city:"Allahabad",age:26},
        {name:"Shivam Singh",city:"Delhi",age:25},
        {name:"Sonu Singh",city:"Noida",age:24},
        {name:"Shivani Singh",city:"Pune",age:23},
    ];
});