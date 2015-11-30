  console.log("hello")
var app = angular.module('myLoginApp', ['ngRoute']).config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/signup', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/homepage', {
        controller: "MainController",
        templateUrl: "views/homepage.html"
      })
      .when('/comment/:id', {
        controller: 'CommentController',
        templateUrl: 'views/comment.html'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);
  console.log("hello")
  console.log("hello")
>>>>>>> aa2ac3a34038a3cc6a7afa75026d8ed9111c3aba
