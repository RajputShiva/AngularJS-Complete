// $location Services:-
// var app = angular.module("myModule", []);

// app.controller("myController", function($scope,$location) {
//        $scope.Url = $location.absUrl();
//        $scope.Protocol = $location.protocol();
//        $scope.Host = $location.host();
//        $scope.Port = $location.port();
// });



// $interval Services:-
// var app = angular.module("myModule", []);

// app.controller("myController", function($scope,$interval) {
//        $scope.count = 0;

//        $interval(function() {
//         $scope.count++;
//     }, 1000);

//     $interval(function() {
//       $scope.dateAndTime = new Date();
//     }, 1000);
// });



// $timeout Servises:-
// var app = angular.module("myModule", []);

// app.controller("myController", function($scope,$timeout) {
//        $scope.name = "Learning Never Ends";

//        $timeout(function() {
//         $scope.name = "Function is fired....";
//        }, 5000);
// });



// $window Services:-
var app = angular.module("myModule", []);

app.controller("myController", function($scope,$window) {
      //  $scope.DisplayAlert = function(message) {
      //   $window.alert("Your Message is: " + message);
      //  };

      // input se message lena hain
      // $scope.DisplayAlert = function(name) {
      //   $window.alert("Your Name is: " + name);
      //  };

      // $scope.DisplayPrompt = function() {
      //   var fname = $window.prompt("Enter Your First Name");
      //   var lname = $window.prompt("Enter Your Last Name");
      //   $window.alert("Your full name is: " + fname + " " + lname);
      // };

      // string ko integer me convert krne ke liye parseInt() ka use krte hain
      $scope.Add = function() {
        var num1 = parseInt($window.prompt("Enter First Number"));
        var num2 = parseInt($window.prompt("Enter Second Number"));
        $window.alert("Addition result is: " + (num1 + num2));
      };
});