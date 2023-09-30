var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    // create array
    $scope.employees = [
        {name:"Shivaji",designation:"Sr Manager",age:27,Salary:100000},
        {name:"Monu",designation:"Manager",age:25,Salary:80000},
        {name:"Golu",designation:"Sr Software Eng",age:23,Salary:70000},
        {name:"Raj",designation:"Software Eng",age:22,Salary:60000},
        {name:"Pinku",designation:"Ass Software Eng",age:21,Salary:50000},
    ];
});