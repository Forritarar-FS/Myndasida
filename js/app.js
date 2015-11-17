<<<<<<< HEAD
var app = angular.module('MyndaApp', ['ngRoute']).config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/', {
        controller: "MainController",
        templateUrl: "views/homepage.html"
      })
      .when('LINKFYRIRLOGINDOITLATERYOUSEXYBABES', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
      .when('/signup', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);
<<<<<<< HEAD
=======
  console.log("hello")
>>>>>>> aa2ac3a34038a3cc6a7afa75026d8ed9111c3aba
