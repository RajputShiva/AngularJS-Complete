var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    // create array of object
  $scope.students = [
     {name:"Shivaji", gender:"Male",class:12},
     {name:"Roli",    gender:"Female",class:6},
     {name:"Golu",    gender:"Male",class:10},
     {name:"Salu",    gender:"Female",class:8},
     {name:"Rani",   gender:"Female",class:4}
   ];

   // another way to define
   $scope.EmpView = "empTable.html";   
});